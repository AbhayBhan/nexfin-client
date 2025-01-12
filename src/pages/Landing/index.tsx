import Features from "./components/Features"
import HeroSection from "./components/HeroSection"

const Landing = () => {
  return (
    <div className="mt-12 space-y-16">
      <HeroSection />
      <Features />
    </div>
  )
}

export default Landing