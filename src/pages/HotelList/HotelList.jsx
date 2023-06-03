import Titulos from '../../components/Titulos/Titulos'
import ListaHoteles from '../../components/ListaHoteles/ListaHoteles'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight, faGripLinesVertical } from '@fortawesome/free-solid-svg-icons'

export default function HotelList() {
  return (
    <div className='content__hotelList'>
      <Titulos />
      <div className='content__hotelList--selection'>
        <div>
          <button className='red'>All</button>
          <button>Popular</button>
          <button>Latest</button>
          <button>Trend</button>
        </div>
        <div className='content__hotelList--filter'>
          <div></div>
          <button>Latest Filter</button>
          <div><FontAwesomeIcon icon={faGripLinesVertical} /></div>
          <div><FontAwesomeIcon icon={faGripLinesVertical} /></div>
          <div><FontAwesomeIcon icon={faGripLinesVertical} /></div>
        </div>
      </div>
      <ListaHoteles />
      <div className='content__hotelList--buttons'>
        <button><FontAwesomeIcon icon={faAnglesRight} rotation={180} /></button>
        <button className='red'>1</button>
        <button>2</button>
        <button>3</button>
        <button><FontAwesomeIcon icon={faAnglesRight} /></button>
      </div>
    </div>
  )
}
