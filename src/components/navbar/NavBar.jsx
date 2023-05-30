// import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUser, faGear, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import "./index.scss"

export default function NavBar() {
  return (
    <nav className="navigation__bar">
      <div className="navigation__bar--logo">
        <FontAwesomeIcon icon={faCircleCheck} size="2xl" />
        <h1>RICA</h1>
      </div>
      <ul className="navigation__bar--items">
          <li><a href="/" className="pestana">HOME</a></li>
          <li><a href="/pages" className="pestana">PAGES</a></li>
        </ul>
      <div className="navigation__bar--content">
        <button className='nav-bar__buttons--item'>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className="configuration">
          <div className="navigation__bar--items">
            <select className='money'>
              <option value="USD">USD</option>
              <option value="PEN">PEN</option>
              <option value="COP">COP</option>
            </select>
          </div>
          <div className="navigation__bar--items">
            <select className='language'>
              <option value="ENG">ENG</option>
              <option value="ESP">SPA</option>
              <option value="FRA">FRA</option>
            </select>
          </div>
          <button>
            <FontAwesomeIcon icon={faUser} />
          </button>
          <button id="faGear" className='nav-bar__buttons--item'>
            <FontAwesomeIcon icon={faGear} />
          </button>
        </div>
      </div>
    </nav>

  )
}

