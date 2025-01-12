import Wrapper from "@/ui/Wrapper";
import { Input } from "@mantine/core";
import { BiMailSend } from "react-icons/bi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-primary mt-24 pt-14 pb-4">
      <Wrapper>
        <div className="flex flex-col gap-10 w-full">
          <div className="grid grid-cols-12">
            <div className="col-span-6 space-y-4">
              <h1 className="text-5xl text-white font-bold">NexFin</h1>
              <p className="text-lg text-white font-light">
                Make your Money Smart!
              </p>
              <div className="flex flex-row items-center gap-2 w-full">
                <Input placeholder="Enter your Email" radius="xl" size="md" />
                <button className="p-2 rounded-full bg-background">
                  <BiMailSend className="text-foreground" size="30" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between text-white font-semibold w-full">
            <p>© 2025 Nex Copyright and rights reserved</p>
            <div className="flex flex-row gap-2">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms-and-conditions">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Footer;
