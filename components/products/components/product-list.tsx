import { Card } from "@/components/ui/card";
import { CardContent } from "@mui/material";
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
      <CardContent className="text-center p-2">
        <div className="aspect-square relative">
          <Image
            src="/img/products/public-trucking.jpg"
            alt="products-data"
            layout="fill"
            className="w-full h-full object-cover"
          />
        </div>

        <div>(HT) Handy Talky Tait tp 8100 800 mhz</div>
        <div>Motorola</div>
      </CardContent>
    </Card>
  );
}
