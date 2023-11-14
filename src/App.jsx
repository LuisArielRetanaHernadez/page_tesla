import HeroSection from "./components/HeroSection"
import LandingHeader from "./components/LandingHeader"

function App() {

  return (
    <>
      <LandingHeader />
      <mian className="h-screen w-screen absolute overflow-auto scrollbar-hidden snap-y snap-mandatory">
        
        <div className="snap-center">
          <HeroSection />
        </div>
        <div className="snap-center">
          <HeroSection />
        </div>
        <div className="snap-center">
          <HeroSection />
        </div>
        <div className="snap-center">
          <HeroSection />
        </div>
      </mian>
    </>
  )
}

export default App
