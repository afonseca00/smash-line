import React from "react";

const Hero = () => {
    const scrollToMenu = () => {
      document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
    };
  
    return (
      <div
        className="bg-cover bg-center h-screen text-white flex items-center justify-center"
        style={{ backgroundImage: "url('/images/hero-bg.jpeg')" }}
      >
        <div className="text-center p-4 bg-black bg-opacity-50 rounded-lg">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">Bem-vindo ao Smash Line!</h1>
          <p className="text-lg sm:text-xl mb-4">Os melhores Smash Burgers de Portugal</p>
          <button
            onClick={scrollToMenu}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg"
          >
            Veja o Menu
          </button>
        </div>
      </div>
    );
  };
  
  export default Hero;