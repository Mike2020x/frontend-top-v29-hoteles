import Titulos from "../components/Titulos/Titulos";
import ListaOfertas from "../components/ListaOfertas/ListaOfertas";
import ListaLocalizaciones from "../components/ListaLocalizaciones/ListaLocalizaciones";
import Dashboard from "../components/dashboard/Dashboard";

export default function Home() {
  return (
    <div>
      <Titulos />
      <ListaOfertas />
      <ListaLocalizaciones />
      <Dashboard />
    </div>
  )
}
