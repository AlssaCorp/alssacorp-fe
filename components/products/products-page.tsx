"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import ProductList from "./components/product-list";
import Sidebar from "./components/sidebar";

export default function ProductsPage() {
  const route = useRouter();
  return (
    <div className="bg-[#FFF]">
      <div className="!bg-[#253D6C99] text-[#FFF]">
        <div className="container flex justify-center py-8 px-16">
          <div className="bg-[#b4c2dd70] rounded-[20px] flex flex-col gap-4 px-4 text-center max-w-[800px] py-4">
            <div className="font-bold text-xl">Public Trunking</div>
            <div className="font-medium">
              Introducing public trunking—a game-changing communication solution
              for businesses. Seamlessly connect your teams, enhance
              collaboration, and scale your communication infrastructure with
              ease.
            </div>
          </div>
        </div>
      </div>
      <div className="flex container px-16 py-8">
        <Sidebar />
        <ProductList />
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
}
