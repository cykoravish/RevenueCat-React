import "./App.css";
import LatestPost from "./components/LatestPost";
import Navbar from "./components/Navbar";
import SectionA from "./components/SectionA";
import SectionB from "./components/SectionB";

function App() {
  return (
    <div className="w-full">
      <Navbar />
      <LatestPost />
      <SectionA/>
      <SectionB/>
    </div>
  );
}

export default App;
