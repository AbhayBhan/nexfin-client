import { AppShell, Burger, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";

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
      className="bg-background"
    >
      <AppShell.Header className="relative flex flex-row text-white bg-transparent border-0 justify-between items-center md:px-16">
        <div className="flex items-center gap-3">
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
          <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="sm" />
        </div>
      </AppShell.Header>

      <AppShell.Navbar hiddenFrom="md" p="md">
        Navbar
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
      <Footer />
    </AppShell>
  );
};

export default StaticLayout;
