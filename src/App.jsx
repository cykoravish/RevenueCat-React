import Footer from "./components/Footer";
import LatestPost from "./components/LatestPost";
import Navbar from "./components/Navbar";
import SectionA from "./components/SectionA";
import SectionB from "./components/SectionB";
import SectionC from "./components/SectionC";
import SectionD from "./components/SectionD";
import SectionE from "./components/SectionE";
import Subscribe from "./components/Subscribe";

function App() {
  return (
    <div className="w-full">
      <Navbar />
      <LatestPost />
      <SectionA />
      <SectionB />
      <SectionC />
      <Subscribe />
      <SectionD />
      <SectionE />
      <Footer />
    </div>
  );
}

export default App;
