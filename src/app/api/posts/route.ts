import { connect } from "@/lib/db";
import { prisma } from "../../../../prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await connect();
    console.log("connected to db");

    const body = await req.json();

    // console.log(body.tag);

    const res = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        Tag: body.tag,
      },
    });

    return NextResponse.json(res, { status: 201 });
  } catch (error: any) {
    console.log("error ", error);
    return NextResponse.json(
      { message: "could not create post" },
      { status: 500 }
    );
  }
}
