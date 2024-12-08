import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.tsx";
import MantineWrapper from "@/providers/MantineProvider.tsx";
import "@/styles/global.css";
import store from "@/redux/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <MantineWrapper>
        <App />
      </MantineWrapper>
    </Provider>
  </StrictMode>
);
