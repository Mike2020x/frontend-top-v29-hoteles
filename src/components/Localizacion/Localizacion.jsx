import PropTypes from 'prop-types';
import './Localizacion.scss';

function Localizacion({ imageLocation, title, description }) {
  return (
    <div className='localizacion'>
      <img src={imageLocation} className='localizacion__imagen' alt={imageLocation} />
      <div className='localizacion__contenido'>
        <h2 className='localizacion__titulo'>{title}</h2>
        <p className='localizacion__descripcion'>{description}</p>
      </div>
    </div>
  );
}

Localizacion.propTypes = {
  imageLocation: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Localizacion;
