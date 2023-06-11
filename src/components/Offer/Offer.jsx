import PropTypes from 'prop-types'
import './Offer.scss'

export default function Offer({ imageOferta, title, description }) {

  return (
    <>
      <div className='content__offer'>
        <img src={imageOferta} className="content__offer--image" alt={imageOferta} width="200px" />
        <div className='content__offer--text'>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </>
  )
}

Offer.propTypes = {
  imageOferta: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
}
