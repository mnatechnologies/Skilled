import { TopBar } from "@/components/TopBar";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { EligibilitySteps } from "@/components/EligibilitySteps";
import { FAQ } from "@/components/FAQ";
import { CallbackForm } from "@/components/CallbackForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />
      <Hero />
      <Services />
      <EligibilitySteps />
      <FAQ />
      <CallbackForm />
      <Footer />
    </div>
  );
}
