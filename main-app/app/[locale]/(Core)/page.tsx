import { Suspense } from "react";
import CallToAction from "../_components/CallToAction";
import Hero from "../_components/Hero";
import HowItWorks from "../_components/HowItWorks";
import OfferedSection from "../_components/OfferedSection";
import Residencies from "../_components/Residencies";
import Value from "../_components/Value";
import Contact from "../_components/Contact";

import { getDictionary } from "@/messages/dictionaries";
import { Messages } from "@/global";
import Loader from "@/components/ui/loader";
import { locales } from "@/i18n";

export const dynamic = "force-static";

// Translated
export default async function Home({ params: { locale } }: { params: { locale: string } }) {
  const dict: Messages = await getDictionary(locale);
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Hero dict={dict.Index.Hero} />
      </div>
      <Suspense fallback={<Loader />}>
        <Residencies margin="mb-0">
          <Residencies.Head subHeading={dict.Index.Residencies.subHeading} heading={dict.Index.Residencies.heading} />
        </Residencies>
      </Suspense>
      <HowItWorks />
      <Value />
      <OfferedSection />
      <CallToAction />
      <Contact />
    </div>
  );
}
