import Navbar from "../src/components/Navbar"
import Chat from "../src/components/Chat"

import { Routes , Route } from "react-router-dom";

import Home from "./Pages/Home"
import About from "./Pages/About"
import Team from "./Pages/Team"
import Cars from "./Pages/Cars"
import Contact from "./Pages/Contact"
import Register from "./Pages/Register"


import "./styles/global.scss"





function App() {
  return (
   <>
   <Navbar />
   <Routes>
      <Route index path="/" element={ <Home /> }  />
      <Route       path="/about" element={ <About /> }  />
      <Route       path="/team" element={ <Team /> }  />
      <Route       path="/cars" element={ <Cars /> }  />
      <Route       path="/contact" element={ <Contact /> }  />

      <Route       path="/register" element={ <Register /> }  />

   </Routes>

   <Chat />
   
   </>
  );
}

export default App;
