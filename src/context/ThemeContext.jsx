import { createContext, useCallback, useEffect, useMemo, useState } from 'react'
import { useAuth } from '../hooks/useAuth'

export const ThemeContext = createContext(null)

const TEMA_KEY = 'truex-theme'
const TEMAS = ['light', 'dark']

function leerPreferencia() {
  try {
    const guardado = localStorage.getItem(TEMA_KEY)
    return TEMAS.includes(guardado) ? guardado : null
  } catch (error) {
    return null
  }
}

export function ThemeProvider({ children }) {
  const { user } = useAuth()
  const [tema, setTema] = useState(() => leerPreferencia() ?? (user ? 'dark' : 'light'))
  const [preferenciaManual, setPreferenciaManual] = useState(() => Boolean(leerPreferencia()))

  useEffect(() => {
    if (!preferenciaManual) {
      setTema(user ? 'dark' : 'light')
    }
  }, [user, preferenciaManual])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', tema)
    document.documentElement.style.colorScheme = tema
  }, [tema])

  const setTheme = useCallback((nuevoTema) => {
    if (!TEMAS.includes(nuevoTema)) return
    try {
      localStorage.setItem(TEMA_KEY, nuevoTema)
    } catch (error) {
      // Sin persistencia si el navegador la bloquea
    }
    setPreferenciaManual(true)
    setTema(nuevoTema)
  }, [])

  const toggleTheme = useCallback(() => {
    setTema((actual) => {
      const nuevoTema = actual === 'light' ? 'dark' : 'light'
      try {
        localStorage.setItem(TEMA_KEY, nuevoTema)
      } catch (error) {
        // Sin persistencia si el navegador la bloquea
      }
      return nuevoTema
    })
    setPreferenciaManual(true)
  }, [])

  const value = useMemo(
    () => ({
      tema,
      theme: tema,
      esOscuro: tema === 'dark',
      setTheme,
      toggleTheme,
    }),
    [tema, setTheme, toggleTheme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
