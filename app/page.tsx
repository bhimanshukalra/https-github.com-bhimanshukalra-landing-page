import Approach from "@/components/Approach";
import { CarouselView } from "@/components/Carousel";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Services } from "@/components/Services";
import Grid from "@/components/ui/Grid";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <Grid />
        <CarouselView />
        <Services />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
