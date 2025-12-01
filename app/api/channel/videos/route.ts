import { NextResponse } from "next/server";
import { MOCK_VIDEOS } from "@/constants/mockData";

export async function GET() {
  // 실제 네트워크 통신처럼 보이게 하기 위해 0.5초 딜레이
  await new Promise((resolve) => setTimeout(resolve, 500));

  return NextResponse.json(MOCK_VIDEOS);
}
