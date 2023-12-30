"use client";

import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ButtonAction = ({ id }: any) => {
  const router = useRouter();
  const { mutate: deletePost } = useMutation({
    mutationFn: async () => {
      return await axios.delete(`/api/posts/${id}`);
    },
    onSuccess: () => {
      router.push("/");
      router.refresh();
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return (
    <div>
      <Link href="/edit/1" className="btn mr-2">
        Edit
      </Link>
      <button onClick={() => deletePost()} className="btn btn-error">
        Delete
      </button>
    </div>
  );
};

export default ButtonAction;
