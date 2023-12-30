"use client";

import BackButton from "@/components/BackButton";
import FormPost from "@/components/FormPost";
import { FormInputPost } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { SubmitHandler } from "react-hook-form";

const CreatePage = () => {
  const handleCreatePost: SubmitHandler<FormInputPost> = (data: any) => {
    console.log(data);

    createPost(data);
  };

  const { mutate: createPost, isPending } = useMutation({
    mutationFn: async (data: any) => {
      const res = await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify(data),
      });

      const dataRes = await res.json();

      if (!res.ok) {
        throw new Error(dataRes.message);
      }
    },
    onError: (error) => {
      console.log(error);
    },
    onSuccess: (data) => {
      console.log(data);
    },
  });
  return (
    <div>
      <BackButton />
      <h1 className="text-2xl my-4 font-bold text-center">Add new Post</h1>
      <FormPost submit={handleCreatePost} isEditing={false} />
    </div>
  );
};

export default CreatePage;
