import React from "react";
import Link from "next/link";
import { SignUpButton, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Logo from "@/public/HaciendaLogo.jpeg";

export const Header = () => {
  const { userId } = auth();

  return (
    <nav className="fixed w-full bg-white z-50 flex justify-center items-center border-b shadow-sm">
      <div className="py-4 justify-between flex gap-8 items-center flex-wrap px-4 w-full sm:max-w-3xl lg:max-w-5xl">
        {/* logo */}
        <Link href="/" className="valuestransition">
          <Image src={Logo} alt="HaciendaX Logo" width={30} height={30} />
        </Link>

        <div className="flex justify-center items-center gap-8">
          {/* <NavLinks /> */}
          <div className="valuestransition sizemenu">
            {!userId ? (
              <SignUpButton mode="modal" forceRedirectUrl={"/onboarding"}>
                <p className="text-base">Sign Up</p>
              </SignUpButton>
            ) : (
              <UserButton />
            )}
          </div>
          {/* <div className="md:hidden"> */}
          <NavSlider />
          {/* </div> */}
        </div>
      </div>
    </nav>
  );
};

function NavLinks() {
  return (
    <div className="flex justify-center gap-4 items-center shadow-lg">
      <Link href="/property-for-sale">
        <p className="text-xl ">Search</p>
      </Link>
      <Link href="/favourites">
        <p className="text-xl">Favourites</p>
      </Link>
      {/* Onboarding */}
      <Link href="/dashboard">
        <p className="text-xl ">Sell your Property</p>
      </Link>
      <Link href="/pricingplan">
        <p className="text-xl ">Pricing</p>
      </Link>
      <Link href="/contact">
        <p className="text-xl">Contact & Support</p>
      </Link>
    </div>
  );
}

function NavSlider() {
  "use client";

  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon size={25} />
      </SheetTrigger>
      <SheetContent className="flex justify-between py-80 items-start flex-col shadow-lg">
        <Link href="/property-for-sale">
          <p className="text-xl ">Search</p>
        </Link>
        <Link href="/favourites">
          <p className="text-xl">Favourites</p>
        </Link>
        {/* Onboarding */}
        <Link href="/dashboard">
          <p className="text-xl ">Sell your Property</p>
        </Link>
        <Link href="/pricing">
          <p className="text-xl ">Pricing</p>
        </Link>
        <Link href="/contact">
          <p className="text-xl">Contact & Support</p>
        </Link>
      </SheetContent>
    </Sheet>
  );
}
