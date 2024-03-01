"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import ProductList from "./components/product-list";
import Sidebar from "./components/sidebar";
import { HeadlineData, Product, ProductsResponse } from "@/dao/products";
import { FC, useEffect, useState } from "react";

const headlineData: HeadlineData[] = [
  {
    key: "public_trunking",
    title: "Public Trunking",
    headline:
      "Introducing public trunking—a game-changing communication solution for businesses. Seamlessly connect your teams, enhance collaboration, and scale your communication infrastructure with ease.",
  },
  {
    key: "radio_trunking",
    title: "Radio Trunking System",
    headline:
      "Revolutionize your communication efficiency with our cutting-edge radio trunking system. Empowering your teams to collaborate effortlessly and stay ahead of the competition.",
  },
  {
    key: "surveillance",
    title: "Surveilance",
    headline:
      "Empower your security with our advanced surveillance solutions, delivering real-time monitoring and unparalleled insights. Safeguard your assets and ensure peace of mind through our cutting-edge technology, designed to protect what matters most.",
  },
  {
    key: "radio_link",
    title: "Radio Link & Data solution",
    headline:
      "Unlock the power of seamless data telemetry with our Radio Link&Data solution. Transmit critical information in real-time, optimize performance, and stay connected across vast distances, revolutionizing the way you monitor and control your operations.",
  },
];
interface ProductsPageProps {
  data: ProductsResponse;
  category: String;
}

const ProductsPage: FC<ProductsPageProps> = ({ data, category }) => {
  const route = useRouter();
  const [filteredBrands, setFilteredBrands] = useState<string[]>([]);
  const [filteredSubCategory, setFilteredSubCategory] = useState<string[]>([]);
  const [currentProducts, setCurrentProducts] = useState<Product[]>(
    data.products,
  );
  const [currentHeadlineData, setCurrentHeadlineData] =
    useState<HeadlineData>();

  useEffect(() => {
    if (category) {
      const data = headlineData.filter((data) => data.key === category);

      if (data.length === 1) {
        setCurrentHeadlineData(data[0]);
      }
    }
  }, [category]);

  useEffect(() => {
    if (!filteredBrands.length && !filteredSubCategory.length) {
      setCurrentProducts(data.products);
      return;
    }
    let tempProducts: Product[] = data.products;
    if (filteredBrands.length)
      tempProducts = tempProducts.filter((product) =>
        filteredBrands.includes(product.brand),
      );
    if (filteredSubCategory.length)
      tempProducts = tempProducts.filter((product) =>
        filteredSubCategory.includes(product.sub_category),
      );
    setCurrentProducts(tempProducts);
  }, [data.products, filteredBrands, filteredSubCategory]);

  return (
    <div className="bg-[#FFF]">
      <div className="!bg-[#253D6C99] text-[#FFF]">
        <div className="container flex justify-center py-8 px-16">
          <div className="bg-[#b4c2dd70] rounded-[20px] flex flex-col gap-4 px-6 text-center max-w-[800px] py-4">
            <div className="font-bold text-xl">
              {currentHeadlineData?.title}
            </div>
            <div className="font-medium">{currentHeadlineData?.headline}</div>
          </div>
        </div>
      </div>
      <div className="flex container px-16 py-8">
        <Sidebar
          setFilteredBrands={setFilteredBrands}
          setFilteredSubCategory={setFilteredSubCategory}
          brands={data.brands}
          subCategory={data.sub_categories}
        />
        <ProductList products={currentProducts} />
      </div>
      <div className="w-full pb-8 flex justify-center">
        <div className="grid grid-cols-2 gap-4">
          <Button
            className="bg-[#E8C05B] hover:bg-[#E8C05BAA]"
            style={{
              boxShadow:
                "0 4px 6px -1px rgb(0 0 0 / 0.3), 0 2px 4px -2px rgb(0 0 0 / 0.3)",
            }}
            onClick={() => {
              route.back();
            }}
          >
            Back
          </Button>
          <Button
            className="bg-[#30AA2D] hover:bg-[#30AA2DAA]"
            style={{
              boxShadow:
                "0 4px 6px -1px rgb(0 0 0 / 0.3), 0 2px 4px -2px rgb(0 0 0 / 0.3)",
            }}
            onClick={() => {
              route.push("/contact-us");
            }}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductsPage.displayName = "ProductsPage";
export default ProductsPage;
