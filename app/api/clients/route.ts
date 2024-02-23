import { backendAxios } from "@/utils/axios";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = searchParams.get("page");

  try {
    const res = await backendAxios.get(`/clients?page=${page}`);
    return NextResponse.json(res.data, {
      status: res.status,
    });
  } catch (error: any) {
    return NextResponse.json(error?.response?.data, {
      status: error.response ? error.response.status : 500,
    });
  }
}
