import { useState, useEffect } from "react"

export function useRWD() {
  const [device, setDevice] = useState('mobile')

  const handleRWD = () => {
    if (window.innerWidth > 768) {
      setDevice('PC')
    } else {
      setDevice('mobile')
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleRWD)
    handleRWD()

    return (
      () => window.removeEventListener('resize',handleRWD)
    )
  },[])

  return device
}