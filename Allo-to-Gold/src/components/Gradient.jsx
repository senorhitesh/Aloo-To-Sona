import React from 'react'

const Gradient = () => {
  return (
      <div
    className="absolute inset-0 -z-10"
    style={{
      background: "#ffffff",
      backgroundImage: `
        radial-gradient(
          circle at top center,
         #faedcd,
          transparent 30%
        )
      `,
      filter: "blur(80px)",
      backgroundRepeat: "no-repeat",
    }}
  />
  )
}

export default Gradient
  {/* Purple Glow Top */}

     {/* Your Content/Components */}