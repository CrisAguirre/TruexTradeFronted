import { useEffect, useState } from 'react'

export function useMediaQuery(consulta) {
  const [coincide, setCoincide] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(consulta).matches,
  )

  useEffect(() => {
    const media = window.matchMedia(consulta)
    const manejarCambio = (evento) => setCoincide(evento.matches)
    setCoincide(media.matches)
    media.addEventListener('change', manejarCambio)
    return () => media.removeEventListener('change', manejarCambio)
  }, [consulta])

  return coincide
}
