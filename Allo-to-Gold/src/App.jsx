import React, { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import Gradient from './components/Gradient'
import Hero from './components/Hero'
import CustomCursor from './components/CustomCursor'

const App = () => {
 // Start the cursor off-screen so it doesn't flash at the top-left corner
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    // Define the function inside useEffect since it's only used here
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    // Listen to the whole window for mouse movements
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup function to prevent memory leaks when the component unmounts
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return (<>
      <Gradient/>
      <div className='max-w-6xl mx-auto cursor-none'>
     <CustomCursor x={mousePos.x} y={mousePos.y} />
      <NavBar />
      <Hero/>
    </div>
    </>
  )
  
}

export default App