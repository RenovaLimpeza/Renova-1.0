import { NextResponse, type NextRequest } from "next/server";

// Simple in-memory rate limiter for /api routes (best-effort; for serverless, prefer an external store)
const RATE_LIMIT_MAX = 100; // requests
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const hits = new Map<string, { count: number; start: number }>();

function getClientIp(req: NextRequest): string {
  // Standard proxies send a comma-separated list; first is the client IP
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  const realIp = req.headers.get("x-real-ip");
  if (realIp) return realIp.trim();
  const cf = req.headers.get("cf-connecting-ip");
  if (cf) return cf.trim();
  return "unknown";
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/api/")) {
    const ip = getClientIp(req);
    const now = Date.now();
    const rec = hits.get(ip as string);
    if (!rec || now - rec.start > RATE_LIMIT_WINDOW_MS) {
      hits.set(ip as string, { count: 1, start: now });
    } else {
      rec.count += 1;
      if (rec.count > RATE_LIMIT_MAX) {
        return new NextResponse("Too Many Requests", { status: 429 });
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*"],
};
