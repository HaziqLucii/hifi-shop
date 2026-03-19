"use client"

import { motion } from "framer-motion"

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      >
        <circle cx="50" cy="50" r="45" fill="#1a1a1a" stroke="#4a4a4a" strokeWidth="2" />
        <circle cx="50" cy="50" r="20" fill="#4a4a4a" />
        <rect x="48" y="20" width="4" height="30" fill="#4a4a4a" rx="2" />
        <circle cx="50" cy="50" r="3" fill="#1a1a1a" />
      </motion.svg>
    </motion.div>
  )
}
