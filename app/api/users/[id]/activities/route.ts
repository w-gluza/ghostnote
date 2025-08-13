import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const { searchParams } = new URL(req.url);
  const page = Math.max(1, Number(searchParams.get("page") ?? 1));
  const pageSize = Math.min(
    100,
    Math.max(1, Number(searchParams.get("pageSize") ?? 20))
  );
  const skip = (page - 1) * pageSize;

  const [items, total] = await Promise.all([
    prisma.activity.findMany({
      where: { userId: id },
      orderBy: { occurredAt: "desc" },
      skip,
      take: pageSize,
    }),
    prisma.activity.count({ where: { userId: id } }),
  ]);

  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  return NextResponse.json({ items, total, page, pageSize, totalPages });
}
