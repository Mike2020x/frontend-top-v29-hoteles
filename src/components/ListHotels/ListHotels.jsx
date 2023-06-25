import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Hotel from '../Hotel/Hotel';
import './ListHotels.scss';

export default function ListHotels() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const hotel = searchParams.get('hotel');
  const checkIn = searchParams.get('checkIn');
  const checkOut = searchParams.get('checkOut');
  const guests = searchParams.get('guests');

  const initialHotel = [
    {
      image: './exampleHotel.jpg',
      hotel: 'The Venetian',
      location: 'New York',
      about: 'Lorem Ipsum is simply dummy text the printing Ipsum is simply Lorem Ipsum is simply dummy text of the...',
      pastprice: '1300',
      actualprice: '1245'
    }
  ];

  const [hotels, setHotels] = useState(initialHotel);

  useEffect(() => {
    async function fetchHotels() {
      try {
        // const response = await api.get('/api/hotels', {
        //   params: {
        //     hotel,
        //     checkIn,
        //     checkOut,
        //     guests,
        //   },
        // });
        const response = await fetch('https://backend-top-v29-hoteles.onrender.com/api/hotel')
        if (response.ok) {
          const data = await response.json()
          setHotels(data);
        }
      } catch (error) {
        console.error('Error fetching hotels:', error);
      }
    }

    fetchHotels();
  }, [hotel, checkIn, checkOut, guests]);

  return (
    <>
      <div className='content__listHotels'>
        {hotels.map((hotel, index) => (
          <div className='content__listHotels--card' key={index}>
            <Hotel
              image='./exampleHotel.jpg'
              title={hotel.hotel}
              location='New York'
              description={hotel.about}
              pastprice='1300'
              actualprice='1245'
            />
          </div>
        ))}
      </div>
    </>
  );
}
