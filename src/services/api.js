import { items } from '../data/items'

const API_URL = import.meta.env.VITE_API_URL ?? '/api'

export async function getItems() {
  if (!import.meta.env.VITE_API_URL) {
    return items
  }
  const respuesta = await fetch(`${API_URL}/items`)
  if (!respuesta.ok) {
    throw new Error('No se pudieron cargar los artículos')
  }
  return respuesta.json()
}

export async function getItemById(id) {
  if (!import.meta.env.VITE_API_URL) {
    return items.find((item) => item.id === id) ?? null
  }
  const respuesta = await fetch(`${API_URL}/items/${id}`)
  if (!respuesta.ok) {
    throw new Error('No se pudo cargar el artículo')
  }
  return respuesta.json()
}
