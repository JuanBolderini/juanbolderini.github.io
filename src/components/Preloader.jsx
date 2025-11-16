import { useEffect, useState } from 'react'

function Preloader() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Remover preloader rapidamente após renderização
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div 
      id="preloader" 
      style={{
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.5s ease'
      }}
    ></div>
  )
}

export default Preloader

