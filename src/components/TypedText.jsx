import { useEffect, useState, useRef } from 'react'

function TypedText() {
  const [displayText, setDisplayText] = useState('')
  const timeoutRef = useRef(null)
  const currentIndexRef = useRef(0)
  const isDeletingRef = useRef(false)
  const wordIndexRef = useRef(0)

  const words = [
    "Estudante", 
    "Desenvolvedor", 
    "Freelancer", 
    "Curioso e amante de tecnologia"
  ]

  useEffect(() => {
    const type = () => {
      const currentWord = words[wordIndexRef.current]
      const typingSpeed = isDeletingRef.current ? 50 : 100

      if (!isDeletingRef.current) {
        // Modo: Digitando
        if (currentIndexRef.current < currentWord.length) {
          setDisplayText(currentWord.substring(0, currentIndexRef.current + 1))
          currentIndexRef.current++
          timeoutRef.current = setTimeout(type, typingSpeed)
        } else {
          // Terminou de digitar, pausa antes de deletar
          timeoutRef.current = setTimeout(() => {
            isDeletingRef.current = true
            type()
          }, 2000)
        }
      } else {
        // Modo: Deletando
        if (currentIndexRef.current > 0) {
          setDisplayText(currentWord.substring(0, currentIndexRef.current - 1))
          currentIndexRef.current--
          timeoutRef.current = setTimeout(type, typingSpeed)
        } else {
          // Terminou de deletar, passa para próxima palavra
          isDeletingRef.current = false
          wordIndexRef.current = (wordIndexRef.current + 1) % words.length
          currentIndexRef.current = 0
          // Pequena pausa antes de começar a digitar a próxima palavra
          timeoutRef.current = setTimeout(type, 500)
        }
      }
    }

    // Iniciar a animação
    type()

    // Cleanup
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, []) // Executar apenas uma vez ao montar

  return (
    <>
      <span id="typed-text">{displayText}</span>
    </>
  )
}

export default TypedText
