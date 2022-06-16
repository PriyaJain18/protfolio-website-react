import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Blog from "./components/Blog";
import Work from "./components/Work";
import Error from "./components/Error.jsx";
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div>

<Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About />}/> 
        <Route path="/portfolio" element={<Work />}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
    </div>
  );
}

export default App;
