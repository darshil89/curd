"use client";

import BackButton from "@/components/BackButton";
import FormPost from "@/components/FormPost";
import { FormInputPost } from "@/types";
import { SubmitHandler } from "react-hook-form";
import { useParams } from "next/navigation";
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const EditPost = () => {
  const { id } = useParams();
  const router = useRouter();

  const { data, isLoading } = useQuery({
    queryKey: ["post", id],
    queryFn: async () => {
      const res = await axios.get(`/api/posts/${id}`);
      const data = res.data;
      return data[0];
    },
  });
  const { mutate: updatePost, isPending } = useMutation({
    mutationFn: async (data: any) => {
      return axios.patch(`/api/posts/${id}`, data);
    },
    onError: (error) => {
      console.log(error);
    },
    onSuccess: (data) => {
      router.push("/");
      router.refresh();
    },
  });

  const handleEditPost: SubmitHandler<FormInputPost> = (data: any) => {
    updatePost(data);
  };

  if (isLoading)
    return (
      <div className="text-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  return (
    <div>
      <BackButton />
      <h1 className="text-2xl my-4 font-bold text-center">Edit Post</h1>
      <FormPost submit={handleEditPost} initialValue={data} isEditing={true} />
    </div>
  );
};

export default EditPost;
