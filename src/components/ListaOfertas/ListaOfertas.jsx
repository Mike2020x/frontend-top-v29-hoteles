import Oferta from '../Oferta/Oferta'
import './ListaOfertas.scss'

function ListaOfertas() {

  return (
    <>
     <div className='contenedor__listaOfertas'>
        <h1>Top Offers</h1>
        <div className='contenedor__ofertas'>
          <div className='contenedor__ofertas--card offer'>
            <Oferta
              imageOferta="./sale-40.jpg"
              title="Hotel Booking"
              description="Avail Hot Deals On Hotel Booking To Any Place"
            />
          </div>
          <div className='contenedor__ofertas--card offer'>
            <Oferta
              imageOferta="./sale-400.jpg"
              title="Upto $400"
              description="Instant Discount On Domestic Hotels"
            />
          </div>
          <div className='contenedor__ofertas--card offer'>
            <Oferta
              imageOferta="./sale-80.jpg"
              title="Holiday Booking"
              description="Weekend Sale For Holiday Bookings"
            />
          </div>
          <div className='contenedor__ofertas--card offer-show'>
            <Oferta
              imageOferta="./sale-50.jpg"
              title="Food Order"
              description="Complimantary Breakfast. Use Code RICAFOOD"
            />
          </div>
          <div className='contenedor__ofertas--card offer'>
            <Oferta
              imageOferta="./cashback-50.jpg"
              title="50% Cashback"
              description="50% Cashback On Every Cab Bookings"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default ListaOfertas
