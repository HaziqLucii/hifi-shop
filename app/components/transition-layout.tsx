"use client"

import { AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import Loader from "./loader"
import type React from "react"

const MINIMUM_LOADING_TIME = 2000 // 2 seconds

export default function TransitionLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    let timer: NodeJS.Timeout

    const handleStart = () => {
      setIsLoading(true)
      timer = setTimeout(() => {
        setIsLoading(false)
      }, MINIMUM_LOADING_TIME)
    }

    const handleComplete = () => {
      if (timer) clearTimeout(timer)
      setTimeout(() => {
        setIsLoading(false)
      }, MINIMUM_LOADING_TIME)
    }

    window.addEventListener("beforeunload", handleStart)
    window.addEventListener("load", handleComplete)

    return () => {
      if (timer) clearTimeout(timer)
      window.removeEventListener("beforeunload", handleStart)
      window.removeEventListener("load", handleComplete)
    }
  }, [])

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, MINIMUM_LOADING_TIME)

    return () => clearTimeout(timer)
  }, []) // Removed pathname dependency

  return (
    <AnimatePresence mode="wait">
      {isLoading && <Loader />}
      <div key={pathname}>{children}</div>
    </AnimatePresence>
  )
}
