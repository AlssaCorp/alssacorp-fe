import { Card, CardContent } from "@/components/ui/card";
import { Product } from "@/dao/products";
import getImageUrl from "@/utils/getImageUrl";
import Image from "next/image";
import { FC } from "react";
import ProductsUnavailableIcon from "./products-unavailable-logo";

interface ProductsListProps {
  products: Product[];
}

const ProductList: FC<ProductsListProps> = ({ products }) => {
  return (
    <div
      className={`z-[1] md:pl-6 w-full grid grid-cols ${products.length > 0 && "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"} gap-4 px-8 h-fit`}
    >
      {products.map((product) => (
        <div key={product.name}>
          <ProductCard product={product} />
        </div>
      ))}
      {!products.length && (
        <div className="mt-20 md:mt-0 w-full flex flex-col text-[#253961] items-center gap-4">
          <div className="font-bold text-3xl">Sorry!</div>
          <ProductsUnavailableIcon />
          <div className="font-semibold text-2xl">No Product Available</div>
        </div>
      )}
    </div>
  );
};

interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <Card className="h-full bg-[#F3F4F5] overflow-hidden shadow-md">
      <CardContent className="text-center p-0 relative">
        <div className="absolute top-2 left-2 z-[2] text-xs">
          <div className="p-1 rounded-lg bg-[#F3F4F5A6] text-[#253961]">
            {product.sub_category && (
              <div className="font-bold">{product.sub_category}</div>
            )}
          </div>
        </div>
        <div className="aspect-square relative">
          <Image
            src={getImageUrl(product.image)}
            alt="products-data"
            fill
            sizes="500px"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-[#253961] h-full text-sm text-start pl-2 py-2">
          <div className="font-bold">{product.brand}</div>
          <div className="font-medium">{product.name}</div>
        </div>
      </CardContent>
    </Card>
  );
};

ProductList.displayName = "ProductList";
export default ProductList;
