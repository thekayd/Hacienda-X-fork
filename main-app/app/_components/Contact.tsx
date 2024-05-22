"use client";
import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import Image from "next/image";
import ContactImage from "@/public/contact.jpg";
import { useToast } from "@/components/ui/use-toast";

export default function Contact() {
  const { toast } = useToast();

  const handleButtonClick = (text: any) => {
    copyTextcall(text);
    showToast();
  };

  const handleEmailClick = (text: any) => {
    copyText(text);
    showToast();
  };

  const showToast = () => {
    toast({
      description: "Copied Successfully",
    });
  };

  return (
    <div
      id="contact-us"
      className="w-full flex justify-between items-center px-5 md:px-10 lg:px-32 pb-10"
    >
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <div className="flex justify-center items-start flex-col gap-5 w-full">
            <div className="flex justify-center items-start flex-col gap-1 w-full">
              <p className="text-lg font-semibold opacity-80 text-accent w-full">
                Contact Us
              </p>
              <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 w-full">
                Get in touch today
              </h2>
            </div>

            <p className="leading-7 w-full text-muted-foreground">
              We are always ready to help by providing the best services for
              you. We believe a good place to live can make your life better.
            </p>
          </div>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">021 123 145 14</span>
                  </div>
                </div>
                <button
                  className="flexCenter button"
                  onClick={() => handleButtonClick("021 123 145 14")}
                >
                  Copy To Clipboard
                </button>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Email</span>
                    <span className="secondaryText">Hacienda@gmail.com</span>
                  </div>
                </div>

                <button
                  className="flexCenter button"
                  onClick={() => handleEmailClick("Haciendaemail@gmail.com")}
                >
                  Copy To Clipboard
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexEnd c-right">
          <div className="image-container">
            <Image
              src={ContactImage}
              alt="Contact Image"
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function copyText(text: any) {
  navigator.clipboard.writeText(text);
}

function copyTextcall(text: any) {
  navigator.clipboard.writeText(text);
}
