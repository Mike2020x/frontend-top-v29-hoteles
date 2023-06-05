import './index.scss'
import Room from '../../components/Room/Room'
import Hotel from '../../components/Hotel/Hotel'
import Star from '../../components/Star/Star'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faHeart, faShareFromSquare } from '@fortawesome/free-solid-svg-icons'


export default function HotelSingle() {
  return (
    <div className='content__hotelSingle'>
      <div className='content__hotelSingle--room'>
        <div>
          <div className='content__hotelSingle--title'>
            <h2>Sea View Hotel</h2>
            <div className='star__show' ><Star /></div>
            <button><FontAwesomeIcon icon={faShareFromSquare} /></button>
            <button><FontAwesomeIcon icon={faHeart} /></button>
          </div>
          <p>Mina Road, Bur Dubai, Bubai, United Arab Emirates</p>
        </div>
        <div>
          <h3>$250 / Per Night</h3>
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
      </div>

      <div className='content__hotelSingle--menu'>
        <h4>Rooms</h4>
        <h4>About</h4>
        <h4>Facility</h4>
        <h4>Location</h4>
        <h4>Reviews</h4>
        <h4>Policies</h4>
      </div>

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
  )
}
