import { Button } from "../ui/button";
import ProductList from "./components/product-list";
import Sidebar from "./components/sidebar";

export default function ProductsPage() {
  return (
    <div className="bg-[#FFF]">
      <div className="!bg-[#253D6C99] text-[#FFF]">
        <div className="container flex justify-center py-8 px-10">
          <div className="bg-[#b4c2dd70] rounded-lg flex flex-col gap-4 px-4 text-center max-w-[800px] py-4">
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
      <div className="flex container px-10 py-8">
        <Sidebar />
        <ProductList />
      </div>
      <div className="w-full pb-8 flex justify-center">
        <div className="grid grid-cols-2 gap-4">
          <Button className="bg-[#E8C05B] hover:bg-[#E8C05BAA]">Back</Button>
          <Button className="bg-[#30AA2D] hover:bg-[#30AA2DAA]">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}