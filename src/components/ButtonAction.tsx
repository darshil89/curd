import Link from "next/link";

const ButtonAction = () => {
  return (
    <div>
      <Link href="/edit/1" className="btn mr-2">Edit</Link>
      <button className="btn btn-error">Delete</button>
    </div>
  );
};

export default ButtonAction;
