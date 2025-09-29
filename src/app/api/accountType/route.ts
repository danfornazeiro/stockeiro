import { typeAccountEnum } from "@/db/schema";
import { NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json({
    accountTypes: typeAccountEnum.enumValues,
  });
};
