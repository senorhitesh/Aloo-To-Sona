import React, { useState, useRef } from 'react';
import { GoogleGenAI } from '@google/genai';
import Heading from './Heading';
import Button from './Btn';

// 1. Initialize Gemini (Replace with your actual API key!)
const ai = new GoogleGenAI({ apiKey: "YOUR_API_KEY_HERE" });

const MainApp = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  
  // States for Gemini AI
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [aiMessage, setAiMessage] = useState("");
  const imageRef = useRef(null); 

  // Helper function to convert the image file into a format Gemini can read
  const fileToGenerativePart = async (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
             const base64Data = reader.result.split(',')[1];
             resolve({
                 inlineData: {
                     data: base64Data,
                     mimeType: file.type
                 }
             });
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
  };

  const handleAlooUpload = async (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      // Reset UI and show temporary image preview
      setIsVideoPlaying(false);
      setIsVideoEnded(false);
      setIsAnalyzing(true);
      setAiMessage("Gemini is inspecting your item... 🧐");

      const imageUrl = window.URL.createObjectURL(uploadedFile);
      imageRef.current.src = imageUrl;

      try {
        // 2. Prepare the image and the prompt for Gemini
        const imagePart = await fileToGenerativePart(uploadedFile);
        const prompt = "Look at this image. Is it a raw potato (aloo)? Respond strictly with 'YES' if it is a potato, or 'NO' if it is not. Then add a short, funny 1-sentence reason why.";

        // 3. Ask Gemini 2.5 Flash (it is very fast and cheap/free for this!)
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: [
                imagePart,
                { text: prompt }
            ]
        });
        
        const aiText = response.text;
        console.log("Gemini says:", aiText); // Check your console to see what Gemini actually said!

        // 4. Decide what to do based on Gemini's answer
        if (aiText.trim().toUpperCase().startsWith("YES")) {
            // It's a potato! Run the machine!
            setIsAnalyzing(false);
            setAiMessage(""); 
            setIsVideoPlaying(true);
        } else {
            // It's an imposter! Show Gemini's funny reason.
            setIsAnalyzing(false);
            setAiMessage(`Access Denied! 🚫🥔 ${aiText}`);
        }

      } catch (error) {
        console.error("Gemini Error:", error);
        setAiMessage("Gemini scanner broke down. Try again!");
        setIsAnalyzing(false);
      }
    }
  }

  return (
    <div className='h-screen bg-amber-50 pt-20'>
          <Heading title={`🥔 -->🧈 `} />
          
          {/* AI Status/Rejection Message */}
          {aiMessage && (
            <div className="text-center font-bold text-red-500 mb-4 text-xl px-4 max-w-2xl mx-auto">
              {aiMessage}
            </div>
          )}

          <div className='grid bg-pink-200 grid-cols-1 lg:grid-cols-4 gap-4 p-4'>
              
              {/* Column 1: Upload */}
              <div className='col-span-1 border-2 border-black rounded-2xl p-12 flex items-center justify-center bg-white '>
                  <label htmlFor="AaluUpload" className={isAnalyzing ? "cursor-not-allowed opacity-50" : "cursor-pointer"}>
                    <input 
                      type="file" 
                      accept="image/*" 
                      id="AaluUpload" 
                      className='hidden' 
                      onChange={handleAlooUpload} 
                      disabled={isAnalyzing} // Prevent double uploads
                    />
                    <div><Button text={isAnalyzing ? `Scanning...` : `Upload your 🥔`}/></div>
                  </label>
              </div>

              {/* Column 2: Display Video */}
              <div className='col-span-2 border-2 border-black rounded-2xl flex items-center justify-center bg-white overflow-hidden relative'>
                
                {/* We show the image preview briefly while Gemini thinks */}
                <img ref={imageRef} alt="upload preview" className={`max-h-full object-contain ${isVideoPlaying ? 'hidden' : ''}`} />

                {isVideoPlaying && (
                  <video 
                    src="/machine.mp4" 
                    autoPlay 
                    controls={false}
                    className="w-full h-full object-cover rounded-xl absolute inset-0 bg-white z-10"
                    onEnded={() => setIsVideoEnded(true)} 
                  />
                )}
                
                {!isVideoPlaying && !isAnalyzing && !imageRef.current?.src && (
                    <span className="p-20 absolute">Display</span>
                )}
              </div>

              {/* Column 3: Result (The Sona!) */}
              <div className=' col-span-1 border-2 border-black rounded-2xl p-4 flex items-center justify-center bg-white overflow-hidden'>
                {isVideoEnded ? (
                   <img src="/gold-bars.png" alt="Gold" className="max-w-full max-h-full object-contain animate-bounce" />
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

export default MainApp;
  )
}

export default MainApp
