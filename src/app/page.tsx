import PostCard from "@/components/PostCard";
import { prisma } from "../../prisma";

async function getData() {
  try {
    const response = await prisma.post.findMany();

    return response;
  } catch (error: any) {
    console.log(error);
  }
}

export default async function Home() {
  const posts = await getData();

  return (
    <div className="grid items-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
      {posts && posts.map((post) => <PostCard key={post.id} post={post} />)}
    </div>
  );
}
