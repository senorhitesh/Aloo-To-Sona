// 1. Import the image at the top
import rahulImage from '../assets/rahul.png';
import Heading from './Heading';

const Hero = ({ setIsHovering}) => {
  return (
    <div className='flex flex-col items-center relative justify-center h-[60vh]'>
<Heading title={`The Man The Myth`}/>
<h1 
  onMouseEnter={() => setIsHovering(true)} 
  onMouseLeave={() => setIsHovering(false)}
  className={`text-[15.2rem] font-bold tracking-tighter px-8 py-4 rounded-xl leading-[13.1rem] text-center transition-all duration-500 ease-out
    bg-purple-400  bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-clip-text text-transparent
  `}
>
  Rahul <br /> Gandhi
</h1>
      
      {/* 2. Use the imported variable */}
      {/* <img src={rahulImage} alt="Rahul Ji" className='w-160 absolute bg-none select-none' /> */}
    </div>
  )
}

export default Hero;