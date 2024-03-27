import mongoose from "mongoose";
import { connectMongoDb } from "../../../../libs/mongodb";
import Topic from "../../../../models/topic";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { title, description } = await request.json();

  await connectMongoDb();

  await Topic.findByIdAndUpdate(id, { title, description });

  return NextResponse.json({ message: "Topic updated" });
}

export async function GET(request, { params }) {
  let { id } = params;

  await connectMongoDb();

  const topic = await Topic.findOne({ _id: id.toString() });

  return NextResponse.json({ topic }, { status: 200 });
}
