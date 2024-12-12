import React from "react";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br bg-black"
    >
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Android Developer
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            Experienced Android developer skilled in Kotlin, Java, and Jetpack
            Compose. Focused on creating user-friendly apps and optimizing
            performance while staying updated with the latest technologies.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 transition-colors"
            >
              Contact Me
            </a>
          </div>
          <div className="mt-16 animate-bounce">
            <ArrowDown className="mx-auto text-gray-400" size={32} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
