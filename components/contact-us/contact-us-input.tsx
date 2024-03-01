import { FC } from "react";
import { Input } from "../ui/input";

interface ContactUsInputProps {
  label: string;
  onChange: (e: any) => void;
  value: string;
  autoFocus?: boolean;
  className?: string;
}

const ContactUsInput: FC<ContactUsInputProps> = ({
  value,
  label,
  onChange,
  autoFocus,
  className,
}) => {
  return (
    <div className={`${className} group`}>
      <label
        className="font-semibold text-[#AAAEB6] group-focus-within:text-[#FFF] group-active:text-[#FFF]"
        htmlFor={label}
      >
        {label}
      </label>
      <Input
        id={label}
        type="text"
        className="!border-0 !bg-transparent active:bg-transparent !border-b rounded-none focus:!border-white focus:!text-[#FFF] active:!text-[#FFF] text-[#AAAEB6] font-normal px-0"
        value={value}
        onChange={onChange}
        autoFocus={autoFocus}
      />
    </div>
  );
};

ContactUsInput.displayName = "ContactUsInput";
export default ContactUsInput;
