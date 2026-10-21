import { Link } from 'react-router-dom'
import ArticleCard from '../components/ArticleCard'
import { items } from '../data/items'

function Home() {
  return (
    <div className="container page">
      <section className="hero">
        <p className="hero-tag">Trueques en línea</p>
        <h1>Dale una segunda vida a lo que ya no usas</h1>
        <p className="hero-text">
          Publica tus artículos, descubre lo que otros ofrecen y cierra un
          trueque sin dinero de por medio.
        </p>
        <div className="hero-actions">
          <Link to="/explorar" className="btn btn-primary">
            Explorar trueques
          </Link>
          <Link to="/publicar" className="btn btn-outline">
            Publicar un artículo
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>Trueques recientes</h2>
          <Link to="/explorar">Ver todos</Link>
        </div>
        <div className="grid">
          {items.map((item) => (
            <ArticleCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
