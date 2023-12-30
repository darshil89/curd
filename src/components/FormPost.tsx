"use client";
import { useQuery } from "@tanstack/react-query";
import { FormInputPost } from "@/types";
import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";

const DATA = ["JavaScript", "TypeScript", "React", "Vue", "Angular"];

interface FormPost {
  submit: SubmitHandler<FormInputPost>;
  isEditing: boolean;
  initialValue?: FormInputPost;
}

interface Tag {
  id: number;
  name: string;
}
const FormPost: FC<FormPost> = ({ submit, isEditing, initialValue }) => {
  const { register, handleSubmit } = useForm<FormInputPost>({
    defaultValues: initialValue,
  });

  // const { isPending, isError, data, error } = useQuery<Tag[]>({
  //   queryKey: ["tags"],
  //   queryFn: async () => {
  //     const res = await axios.get("/api/tags");
  //     const data = res.data;
  //     return data;
  //   },
  // });

  // console.log(data);

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="flex flex-col items-center justify-center gap-5 mt-10"
      action=""
    >
      <input
        {...register("title", { required: true, maxLength: 20 })}
        autoComplete="on"
        type="text"
        placeholder="Post Title"
        className="input input-bordered w-full max-w-lg"
      />

      <textarea
        {...register("content", { required: true, maxLength: 100 })}
        className="textarea textarea-bordered w-full max-w-lg"
        placeholder="Post Content"
        autoComplete="on"
      ></textarea>

      <select
        className="select select-bordered w-full max-w-lg"
        {...register("tag", { required: true })}
        defaultValue={""}
      >
        <option value="">Select Tags</option>
        {DATA && DATA.map((tag) => <option key={tag}>{tag}</option>)}

        {/* {isPending && <option>Loading...</option>}

        {isError && <option>Error: {isError}</option>} */}
      </select>

      <button type="submit" className="btn btn-primary w-full max-w-lg">
        {isEditing ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default FormPost;
