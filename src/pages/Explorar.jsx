import { useMemo, useState } from 'react'
import ArticleCard from '../components/ArticleCard'
import { items } from '../data/items'

function Explorar() {
  const [busqueda, setBusqueda] = useState('')

  const filtrados = useMemo(() => {
    const texto = busqueda.trim().toLowerCase()
    if (!texto) return items
    return items.filter(
      (item) =>
        item.titulo.toLowerCase().includes(texto) ||
        item.categoria.toLowerCase().includes(texto),
    )
  }, [busqueda])

  return (
    <div className="container page">
      <div className="section-header">
        <h1>Explorar trueques</h1>
      </div>

      <input
        type="search"
        className="input search"
        placeholder="Buscar por título o categoría"
        value={busqueda}
        onChange={(evento) => setBusqueda(evento.target.value)}
      />

      {filtrados.length === 0 ? (
        <p className="empty">No se encontraron artículos.</p>
      ) : (
        <div className="grid">
          {filtrados.map((item) => (
            <ArticleCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Explorar
