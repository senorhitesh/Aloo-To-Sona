import React from 'react'

const Heading = ({title}) => {
  return (
             <div className="flex relative pt-12 items-center w-full max-w-md mx-auto my-8">
             <div className="grow h-0.5 bg-gray-200"></div>
               <p className="px-4 text-2xl text-gray-700 whitespace-nowrap">
               {title}
               </p>
               <div className="grow h-0.5 bg-gray-200"></div>
            </div>
  )
}

export default Heading