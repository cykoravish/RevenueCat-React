import "./App.css";
import LatestPost from "./components/LatestPost";
import Navbar from "./components/Navbar";
import SectionA from "./components/SectionA";

function App() {
  return (
    <div className="w-full">
      <Navbar />
      <LatestPost />
      <SectionA/>
    </div>
  );
}

export default App;
