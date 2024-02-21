import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function ProductList() {
  return (
    <div className="pl-4 w-full grid grid-cols-4 gap-4">
      {Array.from({ length: 5 }).map((_, idx) => (
        <div key={idx}>
          <ProductCard />
        </div>
      ))}
    </div>
  );
}

function ProductCard() {
  return (
    <Card>
      <CardContent className="text-center p-3">
        <div className="aspect-square relative mb-2">
          <Image
            src="/img/products/public-trucking.jpg"
            alt="products-data"
            layout="fill"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-[#253961] text-sm">
          <div className="font-medium">
            (HT) Handy Talky Tait tp 8100 800 mhz
          </div>
          <div className="font-bold">Motorola</div>
        </div>
      </CardContent>
    </Card>
  );
}
