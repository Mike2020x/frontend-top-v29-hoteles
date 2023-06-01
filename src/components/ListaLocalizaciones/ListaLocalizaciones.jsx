import Localizacion from '../Localizacion/Localizacion';
import './ListaLocalizaciones.scss';

function ListaLocalizaciones() {
  const localizaciones = [
    {
      imageLocation: './south-africa.jpg',
      title: 'South Africa',
      description: 'Starting From $5000',
    },
    {
      imageLocation: './india.jpg',
      title: 'India',
      description: 'Starting From $5000',
    },
    {
      imageLocation: './australia.jpg',
      title: 'Australia',
      description: 'Starting From $5000',
    },
    {
      imageLocation: './europe.jpg',
      title: 'Europe',
      description: 'Starting From $5000',
    },
    {
      imageLocation: './america.jpg',
      title: 'America',
      description: 'Starting From $5000',
    },
    {
      imageLocation: './japan.jpg',
      title: 'Japan',
      description: 'Starting From $5000',
    },
  ];

  return (
    <>
      <div className='lista__localizaciones'>
        {localizaciones.map((localizacion, index) => (
          <div className={`lista__localizaciones--item ${index > 1 ? 'hide' : ''}`} key={index}>
            <Localizacion {...localizacion} />
          </div>
        ))}
      </div>
    </>
  );
}

export default ListaLocalizaciones;
