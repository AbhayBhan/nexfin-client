import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.tsx";
import MantineWrapper from "@/providers/MantineProvider.tsx";
import store from "@/redux/store.ts";
import "@/styles/global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <MantineWrapper>
        <App />
      </MantineWrapper>
    </Provider>
  </StrictMode>
);
