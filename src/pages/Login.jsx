import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

function Login() {
  const [correo, setCorreo] = useState('')
  const [clave, setClave] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (evento) => {
    evento.preventDefault()
    login({ nombre: correo.split('@')[0] || 'Usuario', correo })
    navigate('/perfil')
  }

  return (
    <div className="container page auth-page">
      <h1>Iniciar sesión</h1>

      <form className="form" onSubmit={handleSubmit}>
        <label>
          Correo
          <input
            type="email"
            className="input"
            value={correo}
            onChange={(evento) => setCorreo(evento.target.value)}
            required
          />
        </label>

        <label>
          Contraseña
          <input
            type="password"
            className="input"
            value={clave}
            onChange={(evento) => setClave(evento.target.value)}
            required
          />
        </label>

        <button type="submit" className="btn btn-primary">
          Entrar
        </button>
      </form>

      <p className="muted">
        ¿No tienes cuenta? <Link to="/registro">Regístrate</Link>
      </p>
    </div>
  )
}

export default Login
