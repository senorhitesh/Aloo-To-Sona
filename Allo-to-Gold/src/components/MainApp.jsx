import React, { useState } from 'react';
import Heading from './Heading'
import Button from './Btn';
import Modi  from '../assets/modiji.mp4'

const MainApp = () => {
  // 1. State to control whether the video should be visible
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // 2. Function to handle the file upload event
  const handleAlooUpload = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      // A file was selected! Time to play the video.
      setIsVideoPlaying(true);
    }
  }

  return (
    <div className='h-screen bg-amber-50 pt-20'>
          <Heading title={`🥔 -->🧈 `} />
          <div className='grid bg-pink-200 grid-cols-1 lg:grid-cols-4 gap-4 p-4'>
              
              <div className='col-span-1 border-2 border-black rounded-2xl p-12 flex items-center justify-center bg-white '>
                  <label htmlFor="AaluUpload" className="cursor-pointer">
                    <input 
                      type="file" 
                      name="file" 
                      id="AaluUpload" 
                      className='hidden' 
                      onChange={handleAlooUpload} // Added onChange handler
                    />
                    <div><Button text={`Upload your 🥔`}/></div>
                  </label>
              </div>
              {/* Column 2: Display Video */}
              <div className='col-span-2 border-2 border-black rounded-2xl flex items-center justify-center bg-white overflow-hidden'>
                {isVideoPlaying ? (
                  <video 
                    src={Modi}// IMPORTANT: Replace this with your actual video path!
                    autoPlay 
                    controls 
              className="w-full h-full object-cover rounded-xl"
              style={{aspectRatio: 19/6}}
                  />
                ) : (
                  // Otherwise, show the default text
                  <span className="p-20">Display</span>
                )}
              </div>

              {/* Column 3: Result */}
              <div className=' col-span-1 border-2 border-black rounded-2xl p-20 flex items-center justify-center bg-white '>
                {/* Fixed nested <p> tags for better HTML validity */}
                <div className='text-center font-bold text-neutral-500'>
                  Get your <br /> <span className='text-xl'>Sona</span>
                </div>
              </div>

          </div>
    </div>
  )
}

export default MainApp