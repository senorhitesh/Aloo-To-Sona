import React from 'react';
import { motion } from 'framer-motion';

const CustomCursor = ({ x, y, isHovering }) => {
  return (
<motion.div
  className="fixed rounded-full pointer-events-none z-50 bg-white"
  animate={{
    // If width is 24, subtract 12. If hovering width is 96, subtract 48.
    x: x - (isHovering ? 48 : 12), 
    y: y - (isHovering ? 48 : 12),
    width: isHovering ? 166 : 24,
    height: isHovering ? 166 : 24,
  }}
  style={{ mixBlendMode: "difference" }}
/>
  );
};

export default CustomCursor;