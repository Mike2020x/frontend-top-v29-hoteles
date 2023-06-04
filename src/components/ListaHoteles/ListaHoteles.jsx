import Hotel from '../Hotel/Hotel'
import './ListaHoteles.scss'

function ListaHoteles() {
  const hotels = Array(9).fill(null); // Genera un array con 9 elementos nulos

  return (
    <div className='contenedor__hoteles'>
      {hotels.map((_, index) => (
        <div className='contenedor__hoteles--card' key={index}>
          <Hotel
            imageHotel="./exampleHotel.jpg"
            imageLogo="./logoLocation.jpg"
            title="The Venetian"
            location="Newyork"
            description="Lorem Ipsum is simply dummy text the printing Ipsum is simply Lorem Ipsum is simply dummy text of the..."
            pastprice="1300"
            actualprice="1245"
          />
        </div>
      ))}
    </div>
  )
}

export default ListaHoteles
