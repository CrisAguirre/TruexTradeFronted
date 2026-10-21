import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Navbar() {
  const { user, logout } = useAuth()

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="brand">
          Truex
        </Link>

        <nav className="nav-links">
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/explorar">Explorar</NavLink>
          <NavLink to="/publicar">Publicar</NavLink>
          <NavLink to="/perfil">Perfil</NavLink>
        </nav>

        <div className="nav-actions">
          {user ? (
            <>
              <span className="nav-user">Hola, {user.nombre}</span>
              <button type="button" className="btn btn-ghost" onClick={logout}>
                Salir
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-ghost">
                Entrar
              </Link>
              <Link to="/registro" className="btn btn-primary">
                Crear cuenta
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
