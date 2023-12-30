import Link from "next/link";
import React from "react";

const PostCard = ({ post }: any) => {
  // console.log(post);
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{post.title}</h2>
        <p>{post.content}</p>
        <div className="card-actions justify-end">
          <span className="badge badge-neutral">{post.Tag}</span>
          <Link href={`/blog/${post.id}`} className="btn btn-primary">
            Read More...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
