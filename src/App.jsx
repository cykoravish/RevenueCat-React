import "./App.css";
import LatestPost from "./components/LatestPost";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-full">
      <Navbar />
      <LatestPost />
    </div>
  );
}

export default App;
