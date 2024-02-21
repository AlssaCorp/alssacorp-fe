import CeoMessage from "./components/ceo-message";
import Diary from "./components/diary";
import Hero from "./components/hero";

export default function MessageFromCeo() {
  return (
    <div className="bg-[#FFF] text-[#19253E]">
      <Hero />
      <CeoMessage />
      <Diary />
    </div>
  );
}
