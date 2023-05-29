import Titulos from "../components/Titulos/Titulos";
import ListaOfertas from "../components/ListaOfertas/ListaOfertas";
import ListaLocalizaciones from "../components/ListaLocalizaciones/ListaLocalizaciones";
import Dashboard from "../components/dashboard/Dashboard";
import Login from "../components/login/Login";

export default function Home() {
  return (
    <div>
      <Titulos />
      <ListaOfertas />
      <ListaLocalizaciones />
      <Dashboard />
      <Login />
    </div>
  )
}
