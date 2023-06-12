import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Hotel from '../Hotel/Hotel';
import api from '../../api/hotel';
import './ListHotels.scss';

export default function ListHotels() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const hotel = searchParams.get('hotel');
  const checkIn = searchParams.get('checkIn');
  const checkOut = searchParams.get('checkOut');
  const guests = searchParams.get('guests');

  const initialHotels = [
    {
      image: './exampleHotel.jpg',
      title: 'The Venetian',
      location: 'New York',
      description: 'Lorem Ipsum is simply dummy text the printing Ipsum is simply Lorem Ipsum is simply dummy text of the...',
      pastprice: '1300',
      actualprice: '1245',
    },
  ];

  const [hotels, setHotels] = useState(initialHotels);

  useEffect(() => {
    async function fetchHotels() {
      try {
        const response = await api.get('/api/hotels', {
          params: {
            hotel,
            checkIn,
            checkOut,
            guests,
          },
        });
        setHotels(response.data);
      } catch (error) {
        console.error('Error fetching hotels:', error);
      }
    }

    fetchHotels();
  }, [hotel, checkIn, checkOut, guests]);

  return (
    <div>
      <h2>Resultados de búsqueda:</h2>
      <p>Hotel: {hotel}</p>
      <p>Check In: {checkIn}</p>
      <p>Check Out: {checkOut}</p>
      <p>Guests: {guests}</p>

      <div className='content__listHotels'>
        {hotels.map((hotel, index) => (
          <div className='content__listHotels--card' key={index}>
            <Hotel
              image={hotel.image}
              title={hotel.title}
              location={hotel.location}
              description={hotel.description}
              pastprice={hotel.pastPrice}
              actualprice={hotel.actualPrice}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
