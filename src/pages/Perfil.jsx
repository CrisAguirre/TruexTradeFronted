import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

function Perfil() {
  const { user } = useAuth()

  if (!user) {
    return (
      <div className="container page">
        <h1>Mi perfil</h1>
        <p className="muted">Inicia sesión para ver tu perfil y tus trueques.</p>
        <Link to="/login" className="btn btn-primary">
          Iniciar sesión
        </Link>
      </div>
    )
  }

  return (
    <div className="container page">
      <h1>Mi perfil</h1>
      <p className="muted">Hola, {user.nombre}. Aquí verás tus publicaciones.</p>
    </div>
  )
}

export default Perfil
