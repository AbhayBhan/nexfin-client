import React from "react";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

const MantineWrapper = ({ children }: { children: React.ReactNode }) => {
  return <MantineProvider>{children}</MantineProvider>;
};

export default MantineWrapper;
