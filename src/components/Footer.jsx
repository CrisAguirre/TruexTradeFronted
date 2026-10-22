import { Link } from 'react-router-dom'
import logo from '../assets/logos/logo-horizontal.png'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <Link to="/" aria-label="TrueX Trade, ir al inicio">
          <img src={logo} alt="TrueX Trade" className="footer-brand" />
        </Link>
        <p>Intercambia lo que tienes por lo que necesitas.</p>
        <span>&copy; {new Date().getFullYear()} TrueX Trade</span>
      </div>
    </footer>
  )
}

export default Footer
