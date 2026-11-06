import { userModel } from "@/src/utils/db";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await userModel.find().select('-password');

    return NextResponse.json({
    "msg": "users data",
    data,
  });
}
