import Navbar from "./components/Navbar"
import Home from "./components/Home";
import About from "./components/About";
import Catalog from "./components/Catalog";
import Benefit from "./components/Benefit";
import Testimoni from "./components/Testimoni";
import Infomation from "./components/Infomation"
import FaQ from "./components/FAQ"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import MarqueeComp from "./components/MarqueeComp";

function App() {

  return (
    <>
      <Navbar />

      <Home/>
      
      <MarqueeComp/>
      
      <About />
      
      <Catalog />
       
      <Benefit />

      <Testimoni />
      
      <Infomation />
      
      <FaQ />
      
      <Contact />
      
      <Footer />
    </>
  )
}

export default App
