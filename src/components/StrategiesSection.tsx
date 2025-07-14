import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Parallax } from "react-scroll-parallax";

export function StrategiesSection() {
  return (
    <section className="w-full flex justify-center bg-white py-8 md:py-12 mt-14 md:mt-[120px]">
      <Parallax speed={-5} className="absolute inset-0 w-full h-full z-0" />
      <div className="w-full max-w-screen-2xl px-4 md:px-8 relative z-10">
        <h2 className="text-2xl md:text-3xl font-medium text-primary mb-8">Our Strategies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Private Credit */}
          <Card className="flex flex-col items-start p-4 md:p-6 rounded-xl shadow-sm h-full w-full transition-transform transition-shadow transition-colors duration-300 cursor-pointer hover:scale-[1.01] hover:shadow-md hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" tabIndex={0}>
            <h3 className="text-xl font-semibold text-primary mb-2">Private Credit</h3>
            <p className="text-base text-primary/80 mb-4">Sed ornare elit sem in tempor molestie. Ut dolor odio, dictum sodales velit eu, dictum enim. Sed nisi mi, suscipit felis in, sodales ex orci eu enim.</p>
            <Button variant="default" className="mt-auto">Learn More</Button>
          </Card>
          {/* Private Equity */}
          <Card className="flex flex-col items-start p-4 md:p-6 rounded-xl shadow-sm h-full w-full transition-transform transition-shadow transition-colors duration-300 cursor-pointer hover:scale-[1.01] hover:shadow-md hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" tabIndex={0}>
            <h3 className="text-xl font-semibold text-primary mb-2">Private Equity</h3>
            <p className="text-base text-primary/80 mb-4">Sed ornare elit sem in tempor molestie. Ut dolor odio, dictum sodales velit eu, dictum enim. Sed nisi mi, suscipit felis in, sodales ex orci eu enim.</p>
            <Button variant="default" className="mt-auto">Learn More</Button>
          </Card>
          {/* Listed */}
          <Card className="flex flex-col items-start p-4 md:p-6 rounded-xl shadow-sm h-full w-full transition-transform transition-shadow transition-colors duration-300 cursor-pointer hover:scale-[1.01] hover:shadow-md hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" tabIndex={0}>
            <h3 className="text-xl font-semibold text-primary mb-2">Listed</h3>
            <p className="text-base text-primary/80 mb-4">Sed ornare elit sem in tempor molestie. Ut dolor odio, dictum sodales velit eu, dictum enim. Sed nisi mi, suscipit felis in, sodales ex orci eu enim.</p>
            <Button variant="default" className="mt-auto">Learn More</Button>
          </Card>
        </div>
      </div>
    </section>
  );
} 