// 1. Import the image at the top
import rahulImage from '../assets/rahul.png';

const Hero = ({ setIsHovering, isHovering }) => {
  return (
    <div className='flex flex-col items-center relative justify-center h-[60vh]'>
<div className="flex relative items-center w-full max-w-md mx-auto my-8">
  <div className="flex-grow h-[2px] bg-gray-300"></div>
        <p className="px-4 text-2xl text-gray-700 whitespace-nowrap">
    The Man The Myth
  </p>
        <div className="flex-grow h-[2px] bg-gray-300"></div>
      </div>
      <h1 
        onMouseEnter={() => setIsHovering(true)} 
        onMouseLeave={() => setIsHovering(false)}
        className={`text-[15.2rem] font-bold tracking-tighter px-8 py-4 rounded-xl leading-[13.1rem]  text-center transition-all duration-500 ease-out`}
      >
        Rahul <br /> Gandhi
      </h1>
      
      {/* 2. Use the imported variable */}
      {/* <img src={rahulImage} alt="Rahul Ji" className='w-160 absolute bg-none select-none' /> */}
    </div>
  )
}

export default Hero;