import Hotel from '../Hotel/Hotel'
import './ListHotels.scss'

export default function ListHotels() {
  const hotels = Array(9).fill(null); // Genera un array con 9 elementos nulos

  return (
    <div className='content__listHotels'>
      {hotels.map((_, index) => (
        <div className='content__listHotels--card' key={index}>
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
