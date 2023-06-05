import PropTypes from 'prop-types';
import './Location.scss';

export default function Location({ imageLocation, title, description }) {
  return (
    <div className='location'>
      <img src={imageLocation} className='location__image' alt={imageLocation} />
      <div className='location__content'>
        <h2 className='location__title'>{title}</h2>
        <p className='location__description'>{description}</p>
      </div>
    </div>
  );
}

Location.propTypes = {
  imageLocation: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};
