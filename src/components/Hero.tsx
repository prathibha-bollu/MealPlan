import heroImage from '@/assets/hero-image.jpg';
import { Coffee } from "lucide-react";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="w-full relative rounded-2xl overflow-hidden shadow-2xl">
      {/* Hero Image */}
      <img
        src={heroImage}
        alt="Fresh healthy ingredients for meal planning"
        className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

      {/* Text content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
          Welcome to MealPlan
        </h1>
        <p className="text-base md:text-lg text-white mb-6 drop-shadow-md">
           Plan Your Meals, Save Time, Eat Better
        </p>
      <button
  className="flex items-center bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-5 rounded-lg transition-colors shadow-lg"
  onClick={() => {
    const catalogSection = document.getElementById("meal-catalog");
    catalogSection?.scrollIntoView({ behavior: "smooth" });
  }}
>
  <Coffee className="mr-2" size={20} />
  Explore Meals
</button>

      </div>
    </section>
  );
};

export default Hero;
