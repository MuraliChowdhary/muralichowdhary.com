import { revalidateTag } from "next/cache"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token")

  if (token !== process.env.REVALIDATE_TOKEN) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 })
  }

  revalidateTag("blog")

  return NextResponse.json({ revalidated: true, timestamp: Date.now() })
}

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token")

  if (token !== process.env.REVALIDATE_TOKEN) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 })
  }

  revalidateTag("blog")

  return NextResponse.json({ revalidated: true, timestamp: Date.now() })
}
