import Wrapper from "@/ui/Wrapper";
import { Button } from "@mantine/core";
import Feature1 from "@/assets/feature1.png";
import Feature2 from "@/assets/feature2.png";
import Feature3 from "@/assets/feature3.png";

const features = [
  {
    img: Feature1,
    title: "Collaboration Teams",
    description: "Here you can handle projects together with team virtually",
  },
  {
    img: Feature2,
    title: "Cloud Storage",
    description:
      "No nedd to worry about storage because we provide storage up to 2 TB",
  },
  {
    img: Feature3,
    title: "Daily Analytics",
    description:
      "We always provide useful informatin to make it easier for you every day",
  },
];

const Features = () => {
  return (
    <Wrapper>
      <div className="flex flex-col gap-12 text-white w-full">
        <div className="flex flex-row gap-24 items-center justify-between w-full">
          <h1 className="text-4xl font-bold">Our Features you can get</h1>
          <p>
            We offer a variety of interesting features that you can help manage
            your money and make informed decisions
          </p>
          <Button
            className="bg-foreground w-[14%] border-none text-white hover:text-primary hover:bg-transparent transition-colors duration-300"
            size="lg"
            radius="xl"
            variant="default"
          >
            Get Started!
          </Button>
        </div>
        <div className="flex flex-row gap-10 justify-between">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col gap-2">
              <img className="h-96" src={feature.img} />
              <h1 className="text-2xl font-semibold">{feature.title}</h1>
              <p className="text-md font-light">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Features;
