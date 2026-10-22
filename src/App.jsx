import { Routes, Route } from 'react-router-dom'
import PublicLayout from './layouts/PublicLayout'
import Home from './pages/Home'
import Explorar from './pages/Explorar'
import ItemDetail from './pages/ItemDetail'
import Publicar from './pages/Publicar'
import Perfil from './pages/Perfil'
import Login from './pages/Login'
import Registro from './pages/Registro'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="explorar" element={<Explorar />} />
        <Route path="producto/:id" element={<ItemDetail />} />
        <Route path="publicar" element={<Publicar />} />
        <Route path="perfil" element={<Perfil />} />
        <Route path="login" element={<Login />} />
        <Route path="registro" element={<Registro />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
