import { AppShell, Burger, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { FaArrowRight } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import Logo from "@/assets/logo.png";

const StaticLayout = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        breakpoint: "md",
        collapsed: { mobile: !opened },
        width: 0,
      }}
      className="main-background"
    >
      <AppShell.Header className="flex text-primary bg-transparent flex-row border-0 justify-between items-center md:px-16">
        <div className="flex items-center gap-3">
          <img src={Logo} alt="Logo" className="w-10 h-10" />
          <h1 className="font-bold text-3xl">NexFin</h1>
        </div>
        <div className="hidden md:flex flex-row gap-12">
          <Link
            className="hover:font-bold transition-all duration-300"
            to="/about"
          >
            Home
          </Link>
          <Link className="hover:font-bold transition-all duration-300" to="/">
            About Nex
          </Link>
          <Link className="hover:font-bold transition-all duration-300" to="/">
            Features
          </Link>
          <Link className="hover:font-bold transition-all duration-300" to="/">
            Pricing
          </Link>
          <Link
            className="hover:font-bold transition-all duration-300"
            to="/contact"
          >
            Contact Us
          </Link>
        </div>
        <div>
          <div className="flex items-center gap-3">
            <Button
              variant="transparent"
              size="md"
              className="text-primary hover:text-foreground"
            >
              Login
            </Button>
            <Button
              variant="filled"
              radius="xl"
              rightSection={<FaArrowRight size={16} className="text-white" />}
              className="bg-primary text-white hover:bg-foreground transition-all"
            >
              Sign Up
            </Button>
          </div>
          <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="sm" />
        </div>
      </AppShell.Header>

      <AppShell.Navbar hiddenFrom="md" p="md">
        Navbar
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};

export default StaticLayout;
