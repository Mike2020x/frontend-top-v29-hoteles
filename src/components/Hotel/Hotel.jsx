import Star from '../star/Star'
import PropTypes from 'prop-types'
import './Hotel.scss'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

export default function Hotel({ imageHotel, title, location, description, pastprice, actualprice }) {

  return (
    <>
    <Link to="/hotel-single">
      <div className='content__hotelCard'>
        <img src={imageHotel} className="content__hotelCard--image" alt={imageHotel} />
        <div className='content__hotelCard--space'>
          <div className='content__hotelCard--location'>
            <h1>{title}</h1>
            <div>
              <h4><FontAwesomeIcon icon={faLocationDot} /> {location}</h4>
            </div>
          </div>
          <p>{description}</p>
          <div className='content__hotelCard--stars'>
            <Star/>
            <div className='content__hotelCard--reviews'>
              <h4>26412 review</h4>
            </div>
          </div >
          <div className="content__hotelCard--priceService">
            <div className='content__hotelCard--priceHotel'>
              <h3><del>${pastprice}</del></h3>
              <h2>${actualprice}</h2>
            </div>
            <div className='content__hotelCard--priceHotel'>
              <button>Swimming</button>
              <button>Parking</button>
            </div>
          </div>
        </div>
      </div>
      </Link>
    </>
  )
}

Hotel.propTypes = {
  imageHotel: PropTypes.string,
  imageLogo: PropTypes.string,
  title: PropTypes.string,
  location: PropTypes.string,
  description: PropTypes.string,
  pastprice: PropTypes.string,
  actualprice: PropTypes.string,
}
