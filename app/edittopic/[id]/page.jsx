import React from "react";
import EditTopicForm from "../../../components/EditTopicForm";
import axios from "axios";
import { topicsConst } from "@/libs/constants";

const getTopicById = async (id) => {
  const { data } = await axios.get(`${topicsConst}/${id}`);
  return data.topic;
};
async function EditTopic({ params }) {
  const { id } = params;

  const topic = await getTopicById(id);

  console.log("TOPIC", topic);
  return <EditTopicForm topic={topic} />;
}

export default EditTopic;
