import  { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import Gradient from './components/Gradient'
import Hero from './components/Hero'
import CustomCursor from './components/CustomCursor'

const App = () => {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovering, setisHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return (<>
         <div className='max-w-7xl mx-auto   '>
      <Gradient/>
     <CustomCursor x={mousePos.x} y={mousePos.y} isHovering={isHovering} />
      <NavBar />
      <Hero setIsHovering={setisHovering} isHovering={isHovering} />
    </div>
    </>
  )
  
}

export default App