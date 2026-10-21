import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Registro() {
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [clave, setClave] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (evento) => {
    evento.preventDefault()
    login({ nombre, correo })
    navigate('/perfil')
  }

  return (
    <div className="container page auth-page">
      <h1>Crear cuenta</h1>

      <form className="form" onSubmit={handleSubmit}>
        <label>
          Nombre
          <input
            type="text"
            className="input"
            value={nombre}
            onChange={(evento) => setNombre(evento.target.value)}
            required
          />
        </label>

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
            minLength="6"
            required
          />
        </label>

        <button type="submit" className="btn btn-primary">
          Registrarme
        </button>
      </form>

      <p className="muted">
        ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
      </p>
    </div>
  )
}

export default Registro
