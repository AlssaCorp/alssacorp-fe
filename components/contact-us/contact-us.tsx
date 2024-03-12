/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { FC, useState } from "react";
import { Button } from "../ui/button";
import axios from "axios";
import Image from "next/image";
import ContactUsInput from "./contact-us-input";
import { useToast } from "../ui/use-toast";

interface ContactUsForm {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  subject: string;
  inquiry: string;
}

const ContactUs: FC = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [displaySuccessModal, setDisplaySuccessModal] = useState(false);
  const [form, setForm] = useState<ContactUsForm>({
    first_name: "",
    last_name: "",
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
        let data = {
          name: `${form.first_name} ${form.last_name}`,
          email: form.email,
          phone_number: form.phone_number,
          subject: form.subject,
          inquiry: form.inquiry,
        };
        const { status } = await axios.post("/api/inquiries", data);
        if (status >= 200 && status < 300) {
          setForm({
            first_name: "",
            last_name: "",
            email: "",
            phone_number: "",
            subject: "",
            inquiry: "",
          });

          toast({
            title: "Thank you for contacting us.",
            description: "Our team will assist you shortly !",
          });
        }
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There is an Error!",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-center relative">
      <div className="absolute inset-0 z-[-1]">
        <Image
          src="/img/contact-us/bg.png"
          alt="Contact Us Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="pointer-events-none"
        />
        <div className="absolute inset-0 bg-[rgba(12,33,65,0.5)] backdrop-blur-sm"></div>
      </div>
      <div className="px-4 sm:px-8 lg:px-16 py-8 container max-w-[1000px] z-10 relative">
        <div className="text-2xl font-bold text-white mb-8 mt-12 text-center">
          Any Questions? Ask Our Assistance Here!
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <ContactUsInput
            label="First Name"
            value={form.first_name}
            className="col-span-2 md:col-span-1"
            onChange={(e) => {
              setForm((state) => ({ ...state, first_name: e.target.value }));
            }}
          />
          <ContactUsInput
            label="Last Name"
            value={form.last_name}
            className="col-span-2 md:col-span-1"
            onChange={(e) => {
              setForm((state) => ({ ...state, last_name: e.target.value }));
            }}
          />
          <ContactUsInput
            label="Email"
            className="col-span-2 md:col-span-1"
            value={form.email}
            onChange={(e) => {
              setForm((state) => ({ ...state, email: e.target.value }));
            }}
          />
          <ContactUsInput
            className="col-span-2 md:col-span-1"
            label="Contact Number"
            value={form.phone_number}
            onChange={(e) => {
              setForm((state) => ({ ...state, phone_number: e.target.value }));
            }}
          />
          <ContactUsInput
            className="col-span-2"
            label="Subject"
            value={form.subject}
            onChange={(e) => {
              setForm((state) => ({ ...state, subject: e.target.value }));
            }}
          />
          <ContactUsInput
            className="col-span-2"
            label="Message"
            value={form.inquiry}
            onChange={(e) => {
              setForm((state) => ({ ...state, inquiry: e.target.value }));
            }}
          />
        </div>
        <div className="flex md:justify-end justify-center mt-6">
          <Button
            className="font-bold !bg-[#FFF] !text-[#000] px-8"
            onClick={submitFormHandler}
            disabled={!checkIsFormValid() || isLoading}
          >
            Send Message
          </Button>
        </div>
      </div>
      {displaySuccessModal && (
        <div
          onClick={() => setDisplaySuccessModal(false)}
          className="z-[100] fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex justify-center items-center cursor-pointer"
        >
          <div className="max-w-[400px] p-8">
            <Image
              src={"/img/icon/alert-success.png"}
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
};

ContactUs.displayName = "ContactUs";
export default ContactUs;
