import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="container page">
      <h1>404</h1>
      <p className="muted">La página que buscas no existe.</p>
      <Link to="/" className="btn btn-primary">
        Volver al inicio
      </Link>
    </div>
  )
}

export default NotFound
