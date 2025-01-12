import { Button } from "@mantine/core";
import { RxResume } from "react-icons/rx";
import Wrapper from "@/ui/Wrapper";
import HeroImage from "@/assets/landing-hero.png";

const HeroSection = () => {
  return (
    <Wrapper>
      <div className="flex flex-col text-white md:flex-row justify-between items-center w-full">
        <div className="flex flex-col gap-8 w-[40%]">
          <h1 className="text-5xl font-bold">
            We’re here to Manage your Money
          </h1>
          <p className="text-md font-light">
            Take control of your finances like never before with Nexfin. Powered
            by cutting-edge AI, Nexfin helps you organize your money
            effortlessly and make smarter financial decisions.
          </p>
          <div className="flex gap-4">
            <Button
              className="bg-foreground border-none text-white hover:text-primary hover:bg-transparent transition-colors duration-300"
              size="lg"
              radius="xl"
              variant="default"
            >
              Try Now!
            </Button>
            <Button
              size="lg"
              radius="xl"
              variant="outline"
              className="text-foreground border-primary hover:text-primary hover:border-transparent transition-colors duration-300"
              leftSection={<RxResume size={20} />}
            >
              Guide Me
            </Button>
          </div>
        </div>
        <div className="w-1/2">
          <img src={HeroImage} />
        </div>
      </div>
    </Wrapper>
  );
};

export default HeroSection;
