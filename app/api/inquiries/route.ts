import { backendAxios } from "@/utils/axios";
import { NextResponse, type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.json();
  try {
    const res = await backendAxios.post("/inquiries/", data);
    return NextResponse.json(res.data, {
      status: res.status,
    });
  } catch (error: any) {
    return NextResponse.json(error?.response?.data, {
      status: error.response ? error.response.status : 500,
    });
  }
}
