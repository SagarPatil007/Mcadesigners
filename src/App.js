import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";

function App() {
  return (
    <div>
      <Navbar/>
      <div className="flex flex-col min-h-screen">
        <Contact/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
