import AlssaGallery from "@/components/about-us/alssa-gallery/page";
import { GalleryResponse } from "@/dao/galleryResponse";
import { backendAxios } from "@/utils/axios";

export const dynamic = "force-dynamic";

export default async function AlssaGalleryPage() {
  const { data } = await backendAxios.get<GalleryResponse>("/galleries");
  return <AlssaGallery data={data} />;
}
