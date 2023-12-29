import { NextResponse } from "next/server";
import { prisma } from "../../../../prisma/index";

export async function GET() {
  try {
    await prisma.$connect();

    const tags = await prisma.tag.findMany();

    return NextResponse.json(tags, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: "could not fetch tags" },
      { status: 500 }
    );
  }
}
