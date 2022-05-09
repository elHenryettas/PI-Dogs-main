import React from "react";



import FiltAndCards from "./FiltAndCards";
import Navbar from "./Navbar";
import "./Home.scss"
export default function Home() {
  return (
    <div className="home">
    
      <Navbar />
   
      <FiltAndCards />
    </div>
  );
}
