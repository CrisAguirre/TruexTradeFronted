import { Link } from 'react-router-dom'

function ArticleCard({ item }) {
  return (
    <article className="card">
      <div className="card-media">{item.categoria}</div>
      <div className="card-body">
        <h3>{item.titulo}</h3>
        <p>{item.descripcion}</p>
        <Link to={`/producto/${item.id}`} className="btn btn-outline">
          Ver detalle
        </Link>
      </div>
    </article>
  )
}

export default ArticleCard
