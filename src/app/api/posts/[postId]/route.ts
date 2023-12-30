import { connect } from "@/lib/db";
import { prisma } from "../../../../../prisma";
import { NextResponse } from "next/server";

interface contextProps {
  params: {
    postId: string;
  };
}

export async function DELETE(req: Request, context: contextProps) {
  try {
    await connect();
    console.log("connected to db");

    // console.log(body.tag);

    const res = await prisma.post.delete({
      where: {
        id: context.params.postId,
      },
    });

    return NextResponse.json({ message: "Post deleted" }, { status: 201 });
  } catch (error: any) {
    console.log("error ", error);
    return NextResponse.json(
      { message: "could not delete post" },
      { status: 500 }
    );
  }
}
export async function PATCH(req: Request, context: contextProps) {
  try {
    await connect();
    console.log("connected to db");

    const body = await req.json();

    // console.log(body.tag);

    const res = await prisma.post.update({
      where: {
        id: context.params.postId,
      },
      data: {
        title: body.title,
        content: body.content,
        Tag: body.tag,
      },
    });

    return NextResponse.json(res, { status: 200 });
  } catch (error: any) {
    console.log("cant update  ", error);
    return NextResponse.json(
      { message: "could not update post" },
      { status: 500 }
    );
  }
}

export async function GET(req: Request, context: contextProps) {
  try {
    await prisma.$connect();

    const post = await prisma.post.findMany({
      where: {
        id: context.params.postId,
      },
    });

    return NextResponse.json(post, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: "could not fetch a single post" },
      { status: 500 }
    );
  }
}
