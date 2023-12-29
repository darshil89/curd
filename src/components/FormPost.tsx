"use client";

import { FormInputPost } from "@/types";
import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormPost {
  submit: SubmitHandler<FormInputPost>;
  isEditing?: boolean;
}
const FormPost: FC<FormPost> = ({ submit , isEditing }) => {
  const { register, handleSubmit } = useForm<FormInputPost>();

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="flex flex-col items-center justify-center gap-5 mt-10"
      action=""
    >
      <input
        {...register("title", { required: true, maxLength: 20 })}
        type="text"
        placeholder="Post Title"
        className="input input-bordered w-full max-w-lg"
      />

      <textarea
        {...register("content", { required: true, maxLength: 100 })}
        className="textarea textarea-bordered w-full max-w-lg"
        placeholder="Post Content"
      ></textarea>

      <select
        className="select select-bordered w-full max-w-lg"
        {...register("tag", { required: true })}
        defaultValue={""}
      >
        <option disabled value="">
          JavaScript
        </option>
        <option>Typescript</option>
        <option>Python</option>
      </select>

      <button type="submit" className="btn btn-primary w-full max-w-lg">
        {isEditing ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default FormPost;
