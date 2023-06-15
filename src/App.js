import "./App.css";
import { Container } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Header from "./component/Header";
import { AnimatePresence } from "framer-motion";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
function App() {
  const location = useLocation();
  const firebaseConfig = {
    apiKey: "AIzaSyDvUnIdqdGOqjxiaL_UJ2ogt8yr1Kx46oE",
    authDomain: "website-animated-45de6.firebaseapp.com",
    projectId: "website-animated-45de6",
    storageBucket: "website-animated-45de6.appspot.com",
    messagingSenderId: "893461751836",
    appId: "1:893461751836:web:61d10a9a073fe9785097d9"
  };

  const app = initializeApp(firebaseConfig);
  return (
    <>
      <Header />
      <Container style={{ backgroundColor: "black" }}>
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element="Page not found" />
          </Routes>
        </AnimatePresence>
      </Container>
    </>
  );
}

export default App;

// import "./App.css";
// import { Container } from "react-bootstrap";
// import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// import Home from "./pages/Home";
// import Projects from "./pages/Projects";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Services from "./pages/Services";
// import Header from "./component/Header";
// import { AnimatePresence } from "framer-motion";

// function App() {

// const location = useLocation();
  
//   return (
//     <Container style={{ backgroundColor: "black" }}>
//         <Header />
//         <AnimatePresence>
//           <Routes  location={location} key={location.pathname}>
//             <Route path="/" element={<Home />} />
//             <Route path="/projects" element={<Projects />} />
//             <Route path="/services" element={<Services />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="*" element="Page not found" />
//           </Routes>
//         </AnimatePresence>
//     </Container>
//   );
// }

// export default App;
