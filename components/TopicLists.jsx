import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import axios from "axios";
import { topicsConst } from "../libs/constants";

const getTopics = async () => {
  try {
    const { data } = await axios.get(topicsConst);
    return data?.topics || [];
  } catch (e) {
    console.log(e);
  }
};
async function TopicLists() {
  const topics = await getTopics();
  return (
    <>
      {topics.map((topic) => (
        <div
          key={topic._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="font-bold text-2xl">{topic.title}</h2>
            <div>{topic.description}</div>
          </div>

          <div className="flex gap-2">
            <RemoveBtn id={topic._id} />
            <Link href={`/edittopic/${topic._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

export default TopicLists;
