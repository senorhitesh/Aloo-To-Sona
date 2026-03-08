import React, { useState } from 'react';
import Heading from './Heading'
import Button from './Btn'
import Modi  from '../assets/modiji.mp4'

const MainApp = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  // 1. New state to track when the video finishes
  const [isVideoEnded, setIsVideoEnded] = useState(false);

  const handleAlooUpload = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setIsVideoPlaying(true);
      // Reset the ended state in case they upload a second potato!
      setIsVideoEnded(false); 
    }
  }

  return (
    <div className='h-screen bg-amber-50 pt-20'>
          <Heading title={`🥔 -->🧈 `} />
          <div className='grid bg-pink-200 grid-cols-1 lg:grid-cols-4 gap-4 p-4'>
              
              {/* Column 1: Upload */}
              <div className='col-span-1 border-2 border-black rounded-2xl p-12 flex items-center justify-center bg-white '>
                  <label htmlFor="AaluUpload" className="cursor-pointer">
                    <input 
                      type="file" 
                      name="file" 
                      id="AaluUpload" 
                      className='hidden' 
                      onChange={handleAlooUpload} 
                    />
                    <div><Button text={`Upload your 🥔`}/></div>
                  </label>
              </div>

              {/* Column 2: Display Video */}
              <div className='col-span-2 border-2 border-black rounded-2xl flex items-center justify-center bg-white overflow-hidden'>
                {isVideoPlaying ? (
                  <video 
                    src={Modi}
                    autoPlay 
                    controls={false} // Hiding controls makes it look more like a machine!
                    className="w-full h-full object-cover rounded-xl"
              onEnded={() => setIsVideoEnded(true)} // 2. Triggered when video finishes
              style={{aspectRatio:19/6}}
                  />
                ) : (
                  <span className="p-20">Get your Gold by Uploading...</span>
                )}
              </div>

              {/* Column 3: Result (The Sona!) */}
              <div className=' col-span-1 border-2 border-black rounded-2xl p-4 flex items-center justify-center bg-white overflow-hidden'>
                {/* 3. Show image if video ended, otherwise show text */}
                {isVideoEnded ? (
            <div className='group relative'>
              <img 
                     src="https://images.unsplash.com/photo-1610375461369-d613b564f4c4?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                     alt="Gold" 
                     className="max-w-full max-h-full object-contain " // Added a fun bounce animation!
              />
            <button className='px-4 py-2 bg-blue-600 text-white font-medium hidden group-hover:block absolute top-[50%] left-[50%]'>Dowload</button>
            </div>
                ) : (
                  <div className='text-center font-bold text-neutral-500 p-16'>
                    Get your <br /> <span className='text-xl'>Sona</span>
                  </div>
                )}
              </div>

          </div>
    </div>
  )
}

export default MainApp