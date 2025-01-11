import { BrowserRouter, Routes, Route } from "react-router-dom";
import StaticLayout from "@/layout/static";
import Landing from "@/pages/Landing";
import OnboardingLayout from "@/layout/onboarding";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<StaticLayout />}>
          <Route path="/" element={<Landing />} />
        </Route>
        <Route element={<OnboardingLayout />}>
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
