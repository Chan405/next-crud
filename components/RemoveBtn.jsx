"use client";
import { topicsConst } from "@/libs/constants";
import axios from "axios";
import React from "react";
import { HiTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

function RemoveBtn({ id }) {
  const router = useRouter();

  const removeTopic = async (id) => {
    try {
      await axios.delete(`${topicsConst}?id=${id}`);
      router.refresh();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <HiTrash
      className="text-red-500 cursor-pointer"
      size={24}
      onClick={() => removeTopic(id)}
    />
  );
}

export default RemoveBtn;
