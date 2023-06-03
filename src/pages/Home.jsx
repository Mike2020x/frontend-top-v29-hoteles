import Titulos from "../components/Titulos/Titulos";
import ListaOfertas from "../components/ListaOfertas/ListaOfertas";
import ListaLocalizaciones from "../components/ListaLocalizaciones/ListaLocalizaciones";
import BookingSummaryPage from "./bookinSummaryPage/BookingSummaryPage";
import Checkout from "./checkoutPage/Checkout";

export default function Home() {
  return (
    <div>
      {/* <Titulos />
      <ListaOfertas />
      <ListaLocalizaciones /> */}
      <Checkout />
    </div>
  )
}


