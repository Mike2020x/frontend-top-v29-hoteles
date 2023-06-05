import { Link } from 'react-router-dom'
import './Titulos.scss'

function Titulos() {

  return (
    <>
      <div className='contenedor__titulos'>
        <h1>BOOK ROOMS, HOMES & APTS</h1>
        <div className='contenedor__titulos--busqueda'>
          <div className='contenedor__titulos--box'>
            <div className='contenedor__titulos--mobileBox'>
              <div className='contenedor__titulos--border'>
                <h4>HOTEL</h4>
                <input type="text" className='location' />
              </div>
              <div className="border__right1"></div>
              <div className='contenedor__titulos--border'>
                <h4>CHECK IN</h4>
                <input type="date" id="checkOut" className="search-for--input" />
              </div>
              <div className="border__right2"></div>
            </div>
            <div className='contenedor__titulos--mobileBox'>
              <div className='contenedor__titulos--border'>
                <h4>CHECK OUT</h4>
                <input type="date" id="checkIn" className="search-for--input" />
              </div>
              <div className="border__right1"></div>
              <div className='contenedor__titulos--border'>
                <h4>GUESTS</h4>
                <select className='cantidad'>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div className="border__right2"></div>
            </div>
            <div className='contenedor__titulos--box search'>
              <Link to="/hotel-list">SEARCH</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default Titulos
