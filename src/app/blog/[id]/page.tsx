import BackButton from "@/components/BackButton";
import ButtonAction from "@/components/ButtonAction";
import React from "react";
import { prisma } from "../../../../prisma";

interface BlogDetailPageProps {
  params: {
    id: String;
  };
}

async function getPost(id: String) {
  const res = await prisma.post.findUnique({
    where: {
      id: String(id),
    },
  });

  return res;
}

const BlogDetailPage = async ({ params }: BlogDetailPageProps) => {
  const post = await getPost(params.id);

  // console.log(post);
  return (
    <div>
      <div className="mb-8">
        <BackButton />
        <h1 className="text-2xl font-bold my-4">{post?.title}</h1>
        <span className="badge badge-neutral">{post?.Tag}</span>
      </div>
      <ButtonAction />

      <p className="text-slate-400 mt-5">{post?.content}</p>
    </div>
  );
};

export default BlogDetailPage;
