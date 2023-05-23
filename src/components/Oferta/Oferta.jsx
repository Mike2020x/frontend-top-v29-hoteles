import PropTypes from 'prop-types'
import './Oferta.scss'

function Oferta({imageOferta, title, description}) {

    return (
        <>
            <div className='contenedor__cardoferta'>
                <img src={imageOferta} className="image" alt={imageOferta} width="200px" />
                <div className='contenedor__cardoferta--text'>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
}

Oferta.propTypes = {
    imageOferta: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
}

export default Oferta
