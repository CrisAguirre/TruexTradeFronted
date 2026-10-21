import { Link, useParams } from 'react-router-dom'
import { items } from '../data/items'

function ItemDetail() {
  const { id } = useParams()
  const item = items.find((articulo) => articulo.id === id)

  if (!item) {
    return (
      <div className="container page">
        <h1>Artículo no encontrado</h1>
        <Link to="/explorar" className="btn btn-primary">
          Volver a explorar
        </Link>
      </div>
    )
  }

  return (
    <div className="container page">
      <div className="detail">
        <div className="detail-media">{item.categoria}</div>
        <div className="detail-body">
          <p className="hero-tag">{item.categoria}</p>
          <h1>{item.titulo}</h1>
          <p>{item.descripcion}</p>
          <p className="detail-user">Publicado por {item.usuario}</p>
          <button type="button" className="btn btn-primary">
            Proponer trueque
          </button>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
