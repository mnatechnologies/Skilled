// import { ComingSoon } from "@/components/ComingSoon";
//
// export default function Home() {
//   return <ComingSoon />;
// }
import { TopBar } from "@/components/TopBar";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ValueProps } from "@/components/ValueProps";
import { Services } from "@/components/Services";
import { EligibilitySteps } from "@/components/EligibilitySteps";
import { Testimonials } from "@/components/Testimonials";
import { ServiceAreas } from "@/components/ServiceAreas";
import { FAQ } from "@/components/FAQ";
import { CallbackForm } from "@/components/CallbackForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
      <div className="min-h-screen">
        <TopBar />
        <Navigation />
        <Hero />
        <ValueProps />
        <Services />
        <EligibilitySteps />
        <Testimonials />
        <ServiceAreas />
        <FAQ />
        <CallbackForm />
        <Footer />
      </div>
  );
}
