function Publicar() {
  const handleSubmit = (evento) => {
    evento.preventDefault()
  }

  return (
    <div className="container page">
      <h1>Publicar un artículo</h1>
      <p className="muted">Completa los datos de lo que quieres intercambiar.</p>

      <form className="form" onSubmit={handleSubmit}>
        <label>
          Título
          <input type="text" className="input" placeholder="Ej. Bicicleta rodado 29" required />
        </label>

        <label>
          Categoría
          <select className="input" defaultValue="">
            <option value="" disabled>
              Selecciona una categoría
            </option>
            <option>Deportes</option>
            <option>Música</option>
            <option>Hogar</option>
            <option>Libros</option>
            <option>Tecnología</option>
            <option>Otros</option>
          </select>
        </label>

        <label>
          Descripción
          <textarea
            className="input"
            rows="5"
            placeholder="Describe el estado y qué te gustaría recibir a cambio"
            required
          />
        </label>

        <label>
          Imagen
          <input type="file" className="input" accept="image/*" />
        </label>

        <button type="submit" className="btn btn-primary">
          Publicar
        </button>
      </form>
    </div>
  )
}

export default Publicar
