import { Link } from 'react-router-dom'
import './Titles.scss'

export default function Titles() {

  return (
    <>
      <div className='content__titles'>
        <h1>BOOK ROOMS, HOMES & APTS</h1>
        <div className='content__titles--search'>
          <div className='content__titles--box'>
            <div className='content__titles--mobileBox'>
              <div className='content__titles--border'>
                <h4>HOTEL</h4>
                <input type="text" className='location' />
              </div>
              <div className="border__right1"></div>
              <div className='content__titles--border'>
                <h4>CHECK IN</h4>
                <input type="date" id="checkOut" className="search-for--input" />
              </div>
              <div className="border__right2"></div>
            </div>
            <div className='content__titles--mobileBox'>
              <div className='content__titles--border'>
                <h4>CHECK OUT</h4>
                <input type="date" id="checkIn" className="search-for--input" />
              </div>
              <div className="border__right1"></div>
              <div className='content__titles--border'>
                <h4>GUESTS</h4>
                <select className='amount'>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div className="border__right2"></div>
            </div>
            <div className='content__titles--box search'>
              <button><Link to="/hotel-list">SEARCH</Link></button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
