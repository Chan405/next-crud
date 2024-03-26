import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
function TopicLists() {
  return (
    <>
      <div className="p-4 flex justify-between border border-slate-500 my-3 gap-5">
        <div>
          <h2> Title </h2>
          <p> Description </p>
        </div>

        <div className="flex gap-2 items-center">
          <RemoveBtn />
          <Link href={"/edittopic/123"}>
            <HiPencilAlt className="text-green-500" size={24} />
          </Link>
        </div>
      </div>
    </>
  );
}

export default TopicLists;
