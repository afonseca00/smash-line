import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

const Contact = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold">Contato</h2>
    <p>Email: contato@smashline.com</p>
    <p>Telefone: +351 123 456 789</p>
  </div>
);

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Menu />
            </>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
