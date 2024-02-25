import { Card, CardContent } from "@/components/ui/card";
import { Product } from "@/dao/products";
import getImageUrl from "@/utils/getImageUrl";
import Image from "next/image";
import { FC } from "react";

interface ProductsListProps {
  products: Product[];
}

const ProductList: FC<ProductsListProps> = ({ products }) => {
  return (
    <div className="pl-4 w-full grid grid-cols-4 gap-4">
      {products.map((product) => (
        <div key={product.name}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <Card className="h-full">
      <CardContent className="text-center p-3">
        <div className="aspect-square relative mb-2">
          <Image
            src={getImageUrl(product.image)}
            alt="products-data"
            fill
            sizes="500px"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-[#253961] text-sm">
          <div className="font-medium">{product.name}</div>
          <div className="font-bold">{product.brand}</div>
          {product.sub_category && (
            <div className="font-medium">{product.sub_category}</div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

ProductList.displayName = "ProductList";
export default ProductList;
