import Home from "@/components/home/home";
import { HomePage as HomePageData } from "@/dao/homepage";
import { backendAxios } from "@/utils/axios";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const { data } = await backendAxios.get<HomePageData>("/");
  return <Home data={data} />;
}
