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

  const handleViewHeigh = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  useEffect(() => {
    window.addEventListener('resize', handleRWD)
    window.addEventListener('resize', handleViewHeigh)
    handleRWD()
    handleViewHeigh()

    return (
      () => {
        window.removeEventListener('resize', handleRWD)
        window.removeEventListener('resize', handleViewHeigh)
      }
    )
  },[])

  return device
}