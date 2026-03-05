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
         #8338ec,
          transparent 10%
        )
      `,
      filter: "blur(80px)",
      backgroundRepeat: "no-repeat",
    }}
  />
  )
}

export default Gradient
