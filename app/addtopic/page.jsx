"use client";
import axios from "axios";
import React, { useState } from "react";
import { topicsConst } from "../../libs/constants";
import { useRouter } from "next/navigation";

function AddTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const createTopic = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(topicsConst, { title, description });
      if (data) {
        router.push("/");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form className="flex flex-col gap-3 mt-8">
      <input
        type="text"
        placeholder="Title"
        className="border border-slate-500 px-8 py-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Description"
        className="border border-slate-500 px-8 py-2"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button
        className="bg-slate-800 text-white font-bold py-3 px-8 w-fit"
        onClick={createTopic}
      >
        Add Topic
      </button>
    </form>
  );
}

export default AddTopic;
