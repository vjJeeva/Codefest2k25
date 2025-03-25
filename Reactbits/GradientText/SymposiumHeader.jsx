import React from 'react';
import GradientText from './GradientText.jsx';

export default function SymposiumHeader() {
  return (
    <div className="bg-gray-900 text-white py-12 px-4 min-h-screen flex flex-col justify-center items-center">
      <div className="text-center max-w-4xl mx-auto">
        <GradientText 
          colors={["#00f260", "#0575e6", "#00f260"]} 
          animationSpeed={6} 
          decryptEffect={true}
          className="text-4xl md:text-5xl mb-6 font-bold uppercase tracking-wide"
        >
          NATIONAL LEVEL SYMPOSIUM
        </GradientText>
        
        <GradientText 
          colors={["#ff6b6b", "#4ecdc4", "#ff6b6b"]} 
          animationSpeed={5}
          className="text-2xl md:text-3xl mb-8 font-semibold"
        >
          Department of Computer Science & Engineering
        </GradientText>
        
        <div className="space-y-6 mt-10">
          <GradientText 
            colors={["#8e2de2", "#4a00e0", "#8e2de2"]} 
            decryptEffect={true}
            className="text-xl md:text-2xl font-medium"
          >
            Challenge - Innovate - Transform
          </GradientText>
          
          <GradientText 
            colors={["#56ab2f", "#a8e063", "#56ab2f"]} 
            className="text-lg md:text-xl"
          >
            Solving Tomorrow's Tech Challenges Today
          </GradientText>
          
          <GradientText 
            colors={["#fc00ff", "#00dbde", "#fc00ff"]} 
            decryptEffect={true}
            className="text-md md:text-lg italic"
          >
            Explore. Innovate. Revolutionize.
          </GradientText>
        </div>
      </div>
    </div>
  );
}