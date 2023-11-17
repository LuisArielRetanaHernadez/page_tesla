import LandingHeader from "./components/LandingHeader"
import Home from "./pages/Home/Home.page"

function App() {

  return (
    <>
      <LandingHeader />
      <mian className="h-screen w-screen absolute overflow-auto scrollbar-hidden snap-y snap-mandatory">
        <Home />
      </mian>
    </>
  )
}

export default App
