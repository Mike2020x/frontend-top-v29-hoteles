import Estrellas from '../Estrellas/Estrellas'
import PropTypes from 'prop-types'
import './Hotel.scss'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
function Hotel({ imageHotel, title, location, description, pastprice, actualprice }) {

  return (
    <>
      <Link to="/hotel-single">
        <div className='contenedor__cardhotel'>
          <img src={imageHotel} className="image" alt={imageHotel} width="360px" />
          <div className='contenedor__espacio'>
            <div className='contenedor__location'>
              <h1>{title}</h1>
              <div>
                <h4><FontAwesomeIcon icon={faLocationDot} /> {location}</h4>
              </div>
            </div>
            <p>{description}</p>
            <div className='contenedor__stars'>
              <Estrellas />
              <div className='revisiones'>
                <h4>26412 review</h4>
              </div>
            </div >
            <div className="priceService">
              <div className='priceHotel'>
                <h3><del>${pastprice}</del></h3>
                <h2>${actualprice}</h2>
              </div>
              <div className='priceHotel'>
                <button>Swimming</button>
                <button>Parking</button>
              </div>
            </div>
          </div>
        </div></Link>
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

export default Hotel
