/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

interface ContactUsForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactUs() {
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [form, setForm] = useState<ContactUsForm>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };
  const checkIsFormValid = () => {
    const formValue = Object.entries(form).map((el) => {
      if (!el[1]) {
        return false;
      }

      if (el[0] == "email" && !validateEmail(el[1])) {
        return false;
      }

      return true;
    });

    for (let i = 0; i < formValue.length; i++) {
      if (!formValue[i]) {
        return false;
      }
    }

    return true;
  };
  const submitFormHandler = () => {
    if (checkIsFormValid()) {
      // Todo: Sent data to server
      console.log(form);
    }
  };

  useEffect(() => {
    setIsFormValid(checkIsFormValid());
  }, [form]);

  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(rgba(12, 33, 65, 0.5), rgba(12, 33, 65, 0.5)), url('/img/contact-us/bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="min-h-screen w-full flex flex-center"
    >
      <div className="px-16 py-8 container max-w-[1000px] font-bold text-[#1F2839]">
        <div className="text-2xl font-bold text-white mb-8 mt-8">
          Any Questions? Ask Our Assistance Here!
        </div>
        <div className="grid grid-cols-1 gap-3">
          <Input
            placeholder="Name"
            type="text"
            className="bg-[#D0D9EA] border-[#ABDDB7] h-[41px] max-w-[800px]"
            onChange={(e) => {
              setForm((state) => ({ ...state, name: e.target.value }));
            }}
          />
          <Input
            placeholder="Email"
            type="email"
            className="bg-[#D0D9EA] border-[#ABDDB7] h-[41px] max-w-[800px]"
            onChange={(e) => {
              setForm((state) => ({ ...state, email: e.target.value }));
            }}
          />
          <Input
            placeholder="Contact Number"
            type="tel"
            pattern="[0-9]{12}"
            className="bg-[#D0D9EA] border-[#ABDDB7] h-[41px] max-w-[800px]"
            onChange={(e) => {
              setForm((state) => ({ ...state, phone: e.target.value }));
            }}
          />
          <Input
            placeholder="Subject"
            type="text"
            className="bg-[#D0D9EA] border-[#ABDDB7] h-[41px] max-w-[800px]"
            onChange={(e) => {
              setForm((state) => ({
                ...state,
                subject: e.target.value,
              }));
            }}
          />
          <Textarea
            placeholder="Message"
            className="bg-[#D0D9EA] border-[#ABDDB7] h-[250px] mt-8"
            onChange={(e) => {
              setForm((state) => ({
                ...state,
                message: e.target.value,
              }));
            }}
          />
          <div className="flex justify-end">
            <Button
              className="bg-[#30AA2D] font-bold"
              onClick={submitFormHandler}
              disabled={!isFormValid}
            >
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
