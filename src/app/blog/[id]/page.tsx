import BackButton from "@/components/BackButton";
import ButtonAction from "@/components/ButtonAction";
import React from "react";

const BlogDetailPage = () => {
  return (
    <div>
      <div className="mb-8">
        <BackButton/>
        <h1 className="text-2xl font-bold my-4">Post One</h1>
      </div>
      <ButtonAction />
      <p className="text-slate-400 mt-5">Content</p>
    </div>
  );
};

export default BlogDetailPage;
