import React from "react";

function AddTopic() {
  return (
    <form className="flex flex-col gap-3 mt-8">
      <input
        type="text"
        placeholder="Title"
        className="border border-slate-500 px-8 py-2"
      />

      <input
        type="text"
        placeholder="Description"
        className="border border-slate-500 px-8 py-2"
      />

      <button className="bg-slate-800 text-white font-bold py-3 px-8 w-fit">
        Add Topic
      </button>
    </form>
  );
}

export default AddTopic;
