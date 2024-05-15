import FeatureSection from "./FeatureSection";
import Footer from "./Footer";
import Herosection from "./Herosection";
import PrincingTag from "./PrincingTag";
import Testimonies from "./Testimonies";
import WorkFlows from "./WorkFlows";

import Navbar from "./componends/Navbar";



function App() {
  return (
    <>
    <Navbar/>

    <div className="max-w-6xl mx-auto pt-20 px-5">
    <Herosection/></div>
    <FeatureSection/>
    <WorkFlows/>
    <PrincingTag/>
    <Testimonies/>
    <Footer/>
    </>
  );
}

export default App;
