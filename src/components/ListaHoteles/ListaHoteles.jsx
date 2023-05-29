import Hotel from '../Hotel/Hotel'
import './ListaHoteles.scss'

function ListaHoteles() {

  return (
    <>
      <div className='contenedor__hoteles'>
        <div className='contenedor__hoteles--card'>
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
        <div className='contenedor__hoteles--card'>
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
        <div className='contenedor__hoteles--card'>
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
      </div>
    </>
  )
}

export default ListaHoteles
