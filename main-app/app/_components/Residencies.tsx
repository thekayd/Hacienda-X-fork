"use client";

import React from "react";
import "swiper/css";
import "./Residencies.css";
import { PuffLoader } from "react-spinners";
import useSWR from "swr";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import PropertyCarousel from "@/components/PropertyCarousel";
import { GenericPropertyResponse } from "@/app/api/(utils)/utils";
import { PropertyCard } from "@/components/PropertyCard";

// Handles calling Fetch API (This is an example, it has been extracted into the Utils file)
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Residencies() {
  // Handles all data fetching states, calls the Fetching Handler
  const { data, error, isLoading } = useSWR<GenericPropertyResponse>(
    "/api/properties",
    fetcher
  );

  return (
    <section id="residencies" className="my-12 w-full">
      <div className="px-4 flex justify-center items-center flex-col w-full gap-5 sm:px-5 xl:px-32 ">
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col">
            <p className="text-lg font-semibold opacity-80 text-accent">
              Featured Properties
            </p>
            <h2 className="text-3xl font-semibold tracking-tight pb-2">
              Popular Residencies
            </h2>
          </div>
          <Button
            variant={"default"}
            className="bg-accent hover:bg-primary hover:border hover:border-accent hover:text-foreground hidden md:block"
          >
            <Link href="/property-for-sale">See more</Link>
          </Button>
        </div>

        {error && !isLoading && (
          <div className="flex justify-center items-center py-20">
            <p className="text-black text-lg">
              An error occurred. Please try again.
            </p>
          </div>
        )}

        {isLoading && (
          <div className="flex justify-center items-center py-5">
            <div className="wrapper flexCenter" style={{ height: "20vh" }}>
              <PuffLoader color="#4066ff" aria-label="puff-loading" />
            </div>
          </div>
        )}

        <PropertyCarousel className="">
          {data?.results.map((property, index) => (
            <PropertyCard key={index} property={property} />
          ))}
        </PropertyCarousel>
      </div>
    </section>
  );
}
