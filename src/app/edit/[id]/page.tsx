"use client"

import FormPost from "@/components/FormPost";
import { FormInputPost } from "@/types";
import { SubmitHandler } from "react-hook-form";

const EditPost = () => {
  const handleEditPost: SubmitHandler<FormInputPost> = (
    data: any
  ) => {
    console.log(data);
  };
  return (
    <div>
      <h1 className="text-2xl my-4 font-bold text-center">Edit Post</h1>
      <FormPost submit={handleEditPost} isEditing={true}/>
    </div>
  );
};

export default EditPost;
