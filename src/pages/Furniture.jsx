import React from "react"
import { motion } from "framer-motion"

import { FurnitureContent } from "../components/"

function Furniture() {
  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5, ease: "easeInOut" }}>
      <FurnitureContent />
    </motion.div>
  )
}

export default Furniture
