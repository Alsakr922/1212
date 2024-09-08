import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BestVideo from './components/BestVideo';
import Members from './components/Members';
import Projects from './components/Projects';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import Conatct from './components/Conatct';
import Submit from './components/Submit';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <BestVideo />
      <Members />
      <Routes>
        <Route path="/" element={<Projects />}>
          <Route path="one" element={<SectionOne />} />
          <Route path="two" element={<SectionTwo />} />
          <Route path="three" element={<SectionThree />} />
        </Route>
      </Routes>
      <Conatct />
      <Submit />
      <Footer />
    </Router>
  );
}

export default App;
