import Titulos from "../components/Titulos/Titulos";
import ListaOfertas from "../components/ListaOfertas/ListaOfertas";
import ListaLocalizaciones from "../components/ListaLocalizaciones/ListaLocalizaciones";
import Blog from "../components/Blog/Blog";

export default function Home() {
  return (
    <div>
      <Titulos />
      <ListaOfertas />
      <ListaLocalizaciones />
      <Blog />
    </div>
  )
}


