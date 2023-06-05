import './index.scss'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCheck, faCouch, faShower, faTv } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


export default function Room({ title, image, beforePrice, nowPrice }) {

  return (
    <>
      <div className='content__room'>
        <h4 className='content__room--title'>{title}</h4>
        <div className='content__room--characteristics'>
          <img src={image} alt="image" />
          <div className='content__room--characteristics-information'>
            <div className='content__room--characteristics-information-list'>
              <div>
                <h4>Amenities</h4>
                <p><FontAwesomeIcon icon={faBed} /> King/Twin</p>
                <p><FontAwesomeIcon icon={faShower} /> Shower</p>
                <p><FontAwesomeIcon icon={faTv} /> LCD TV</p>
                <p><FontAwesomeIcon icon={faCouch} /> Couch</p>
              </div>
              <div>
                <h4>Inclusion</h4>
                <p><FontAwesomeIcon icon={faCheck} /> Wi-Fi</p>
                <p><FontAwesomeIcon icon={faCheck} /> Breakfast</p>
                <p><FontAwesomeIcon icon={faCheck} /> Non Refundable</p>
              </div>
            </div>
            <div className='content__room--price'>
              <p className='line'>{beforePrice}</p>
              <h4>{nowPrice}</h4>
              <p>per night</p>
              <button><Link to="/summary">Book Now</Link></button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Room.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  beforePrice: PropTypes.string,
  nowPrice: PropTypes.string,
}


