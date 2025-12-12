import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";

import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Products from "./components/Products";
import Car from "./components/CarProducts";
import Info from "./components/Hello";



export default function App() {
  return (
   <div>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/product" element={<Products/>}>
      <Route path="car" element={<Car/>}/>

      </Route>
        <Route path="/customer/:s" element={<Info />} />
      
    </Routes>

    <Footer/>
   </div>
  )
}