// Use { setIsHovering } with curly braces to destructure the prop
const Hero = ({ setIsHovering ,isHovering}) => {
  return (
    <div className='flex items-center justify-center h-[60vh]'>
      <h1 
        onMouseEnter={() => setIsHovering(true)} 
        onMouseLeave={() => setIsHovering(false)}
        className={`text-9xl font-bold tracking-tighter px-8 py-4 rounded-xl transition-all duration-500 ease-out
          `}
      >
        Rahul Gandhi
      </h1>
    </div>
  )
}

export default Hero