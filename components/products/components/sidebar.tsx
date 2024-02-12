import { Checkbox } from "@/components/ui/checkbox";

const checkData = [
  { id: "motorola", text: "Motorola" },
  {
    id: "kirisun",
    text: "Kirisun",
  },
];

export default function Sidebar() {
  return (
    <div className="flex flex-col gap-2 bg-[#1E29390D] rounded-lg w-[300px] p-4">
      <div className="text-lg font-bold text-[#253961]">Brand</div>
      {checkData.map((data, id) => (
        <div key={id}>
          <Check id={data.id} text={data.text} />
        </div>
      ))}
    </div>
  );
}

interface CheckProps {
  id: string;
  text: string;
}

function Check({ id, text }: CheckProps) {
  return (
    <div className="items-top flex space-x-2">
      <Checkbox id={id} className="border-[#BAC7D5]" />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor={id}
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-medium text-[#253961]"
        >
          {text}
        </label>
      </div>
    </div>
  );
}
