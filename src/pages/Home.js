import React from 'react';
import HeroSection from '../components/HeroSection';

function Home() {
  return (
    <div>
      <HeroSection />
      <h2 className="text-center mt-4">Featured Products</h2>
      {/* Later we’ll add product list */}
    </div>
  );
}
export default Home;
