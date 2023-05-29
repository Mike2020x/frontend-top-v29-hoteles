import Estrellas from '../Estrellas/Estrellas'
import PropTypes from 'prop-types'
import './Hotel.scss'

function Hotel({ imageHotel, imageLogo, title, location, description, pastprice, actualprice }) {

    return (
        <>
            <div className='contenedor__cardhotel'>
                <img src={imageHotel} className="image" alt={imageHotel} width="360px" />
                <div className='contenedor__espacio'>
                    <div className='contenedor__locacion'>
                        <h1>{title}</h1>
                        <img src={imageLogo} className="logo__location" alt={imageLogo} width="14px" height="14" />
                        <h4>{location}</h4>
                    </div>
                    <p>{description}</p>
                    <div className='contenedor__stars'>
                        <Estrellas></Estrellas>
                    </div >
                    <div className="priceService">
                        <h3><del>${pastprice}</del></h3>
                        <h2>${actualprice}</h2>
                        <button>Swimming</button>
                        <button>Parking</button>
                    </div>
                </div>
            </div>
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
