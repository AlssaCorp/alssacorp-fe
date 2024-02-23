/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import axios from "axios";
import Image from "next/image";

interface ContactUsForm {
  name: string;
  email: string;
  phone_number: string;
  subject: string;
  inquiry: string;
}

export default function ContactUs() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [displaySuccessModal, setDisplaySuccessModal] = useState(false);
  const [form, setForm] = useState<ContactUsForm>({
    name: "",
    email: "",
    phone_number: "",
    subject: "",
    inquiry: "",
  });
  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };
  const validatePhoneNumber = (phone_number: string) => {
    const regex = /^[0-9]{8,12}$/;
    return regex.test(phone_number);
  };
  const checkIsFormValid = () => {
    const formValue = Object.entries(form).map((el) => {
      if (!el[1]) {
        return false;
      }

      if (el[0] === "email" && !validateEmail(el[1])) {
        return false;
      } else if (el[0] === "phone_number" && !validatePhoneNumber(el[1])) {
        return false;
      } else if (el[0] === "inquiry" && el[1].length < 5) {
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

  const submitFormHandler = async () => {
    setIsLoading(true);
    try {
      if (checkIsFormValid()) {
        const { status } = await axios.post("/api/inquiries", form);
        if (status >= 200 && status < 300) {
          setDisplaySuccessModal(true);
          setTimeout(() => {
            setForm({
              name: "",
              email: "",
              phone_number: "",
              subject: "",
              inquiry: "",
            });
            setDisplaySuccessModal(false);
          }, 3000);
        }
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

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
            value={form.name}
            onChange={(e) => {
              setForm((state) => ({ ...state, name: e.target.value }));
            }}
          />
          <Input
            placeholder="Email"
            value={form.email}
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
            value={form.phone_number}
            className="bg-[#D0D9EA] border-[#ABDDB7] h-[41px] max-w-[800px]"
            onChange={(e) => {
              setForm((state) => ({ ...state, phone_number: e.target.value }));
            }}
          />
          <Input
            placeholder="Subject"
            type="text"
            value={form.subject}
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
            value={form.inquiry}
            onChange={(e) => {
              setForm((state) => ({
                ...state,
                inquiry: e.target.value,
              }));
            }}
          />
          <div className="flex justify-end">
            <Button
              className="bg-[#30AA2D] font-bold"
              onClick={submitFormHandler}
              disabled={!checkIsFormValid() || isLoading}
            >
              Send
            </Button>
          </div>
        </div>
      </div>
      {displaySuccessModal && (
        <div
          onClick={() => setDisplaySuccessModal(false)}
          className="z-[100] fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center cursor-pointer"
        >
          <div className="max-w-[400px] p-8">
            <Image
              src={"/img/alert/success.png"}
              sizes="500px"
              width={400}
              height={400}
              alt="success"
              className="object-contain"
            />
            <p className="font-bold mt-8 text-center">
              Thank you for contacting us. Our team will assist you shortly!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
