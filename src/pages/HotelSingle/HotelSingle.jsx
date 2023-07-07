import './index.scss'
import Room from '../../components/Room/Room'
import Hotel from '../../components/Hotel/Hotel'
import Star from '../../components/star/Star'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faHeart, faShareFromSquare } from '@fortawesome/free-solid-svg-icons'
import RoomCard from '../../components/Room/RoomCard'
import { useHotel } from '../../context'


export default function HotelSingle() {
  const { state } = useHotel();
  const { selectedHotel: hotel } = state;

  // useEffect(() => {
  //   async function fetchRoom() {

  //     try {
  //       if (hotel) {

  //         const id = hotel.hotelId

  // //const [locationResponse, roomResponse, imageResponse] =


  //   await Promise.all([
  //     //fetch(`${import.meta.env.VITE_BASE_URL}/api/location/${id}`),
  //     // fetch(`${import.meta.env.VITE_BASE_URL}/api/room/${id}`),
  //     // fetch(`${import.meta.env.VITE_BASE_URL}/api/image/${id}`),
  //   ]);

  // const address = locationResponse.address;
  // const room = roomResponse.


  return (
    <div className='content__hotelSingle'>
      <div className='content__hotelSingle--room'>
        <div className='navbar__hotelSingle'>
          <div className='box__hotelSingle'>
            <div className='content__hotelSingle--title'>
              <h2>{hotel.title}</h2> {/* Usar el título del hotel seleccionado */}
              <div className='star__show' ><Star /></div>
              <button><FontAwesomeIcon icon={faShareFromSquare} /></button>
              <p className='text__show'>Share</p>
              <button><FontAwesomeIcon icon={faHeart} /></button>
              <p className='text__show'>Save</p>
            </div>
            <div>
              <p>calle la soledad</p> {/* Usar la dirección del hotel seleccionado */}
              <div className='free__buttons'>
                <button>Free Wifi</button>
                <button>Free Breakfast</button>
              </div>
            </div>
          </div>
          <div className='hotelSingle__payment'>
            <h3 className='title__short'>{hotel.cost} / Per Night</h3> {/* Usar el precio total del hotel seleccionado */}
            <p className='title__big'><font size="6">{hotel.cost}</font> / Per Night</p> {/* Usar el precio total del hotel seleccionado */}
            <button className='hotelSingle__show book__now'>Book This Now</button>
          </div>
        </div>

        <div className='content__hotelSingle--images'>
          <div className='content__hotelSingle--principal'>
            <select className="selected-label left"><FontAwesomeIcon icon={faAngleRight} rotation={180} /></select>
            <select className="selected-label right"><FontAwesomeIcon icon={faAngleRight} /></select>
            <p className="view-all">View All Images</p>
          </div>
          <div className='hotelSingle__show'>
            <div className='content__hotelSingle--secondary'>
              <p className="view-all">Room Images</p>
            </div>
            <div className='content__hotelSingle--secondary'>
              <p className="view-all">Poll Images</p>
            </div>
          </div>
        </div>
        <RoomCard />
      </div>
      <div className='content__hotelSingle--menu'>
        <h4>Rooms</h4>
        <h4>About</h4>
        <h4>Facility</h4>
        <h4>Location</h4>
        <h4>Reviews</h4>
        <h4>Policies</h4>
      </div>
      <div className='hotelSingle__body'>
        <div>
          <div className='hotelSingle__rooms'>
            <Room
              title='Deluxe Room'
              image='/room1.jpg'
              beforePrice='$1250'
              nowPrice='$1000'
            />
            <Room
              title='Suite Room'
              image='/room2.jpg'
              beforePrice='$1350'
              nowPrice='$1100'
            />
            <Room
              title='Royal Room'
              image='/room3.jpg'
              beforePrice='$1950'
              nowPrice='$1800'
            />
          </div>
          <div className='hotelSingle__list'>
            <div className='hotelSingle__list--hotel'>
              <Hotel
                imageHotel='/venetian.jpg'
                imageLogo=''
                title='The Venetian'
                location='New York'
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla qui, consequuntur deserunt animi corporis ducimus vel illo, et fugit temporibus ea porro dolores facilis excepturi, exercitationem beatae quisquam atque iure'
                pastprice='1300'
                actualprice='1245'
              />
            </div>
            <div className='hotelSingle__show hotelSingle__list--hotel'>
              <Hotel
                imageHotel='/venetian.jpg'
                imageLogo=''
                title='The Venetian'
                location='New York'
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla qui, consequuntur deserunt animi corporis ducimus vel illo, et fugit temporibus ea porro dolores facilis excepturi, exercitationem beatae quisquam atque iure'
                pastprice='1300'
                actualprice='1245'
              />
            </div>
            <div className='hotelSingle__show hotelSingle__list--hotel'>
              <Hotel
                imageHotel='/venetian.jpg'
                imageLogo=''
                title='The Venetian'
                location='New York'
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla qui, consequuntur deserunt animi corporis ducimus vel illo, et fugit temporibus ea porro dolores facilis excepturi, exercitationem beatae quisquam atque iure'
                pastprice='1300'
                actualprice='1245'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

