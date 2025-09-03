import { createContext, useContext, useState, useEffect } from "react"

const BrightnessContext = createContext()

export function BrightnessProvider({ children }) {
  const [brightness, setBrightness] = useState(100)

  useEffect(() => {
    document.documentElement.style.filter = `brightness(${brightness}%)`
  }, [brightness])

  const updateBrightness = (value) => {
    setBrightness(value)
  }

  return <BrightnessContext.Provider value={{ brightness, updateBrightness }}>{children}</BrightnessContext.Provider>
}

export const useBrightness = () => useContext(BrightnessContext)

