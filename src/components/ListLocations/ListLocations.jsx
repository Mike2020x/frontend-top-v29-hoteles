import Location from '../Location/Location';
import './ListLocations.scss';

export default function ListLocations() {
  const locations = [
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
      <div className='list__locations'>
        {locations.map((location, index) => (
          <div className={`list__locations--item ${index > 1 ? 'hide' : ''}`} key={index}>
            <Location {...location} />
          </div>
        ))}
      </div>
    </>
  );
}

