import Titles from '../../components/Titles/Titles'
import ListHotels from '../../components/ListHotels/ListHotels'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripLinesVertical, faSliders } from '@fortawesome/free-solid-svg-icons'

export default function HotelList() {

  return (
    <div className='content__hotelList'>
      <Titles />
      <div className='content__hotelList--selection'>
        <select className='filter__menu'>
          <option value="">Filter</option>
          <option value="">All</option>
          <option value="">Popular</option>
          <option value="">Latest</option>
          <option value="">Trend</option>
        </select>
        <div className='filter__hide'>
          <button className='red'>All</button>
          <button>Popular</button>
          <button>Latest</button>
          <button>Trend</button>
        </div>
        <div className='content__hotelList--filter'>
          <div className='filter__icon'><FontAwesomeIcon icon={faSliders} /></div>
          <button>Latest Filter</button>
          <div className='filter__hide'>
            <div><FontAwesomeIcon icon={faGripLinesVertical} /></div>
            <div><FontAwesomeIcon icon={faGripLinesVertical} /></div>
            <div><FontAwesomeIcon icon={faGripLinesVertical} /></div>
          </div>
        </div>
      </div>
      <ListHotels />
    </div>
  )
}
