import ProductsPage from "@/components/products/products-page";
import { ProductsResponse } from "@/dao/products";
import { backendAxios } from "@/utils/axios";

export const dynamic = "force-dynamic";

export default async function ProductsDetailsPage({
  params: { category },
}: {
  params: { category: string };
}) {
  const { data } = await backendAxios.get<ProductsResponse>(
    `/products/${category}`,
  );
  return <ProductsPage data={data} />;
}
