// import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUser, faGear } from '@fortawesome/free-solid-svg-icons'
import "./index.scss"

export default function NavBar() {
  return (
    <nav className="navigation__bar">
      <div className="navigation__bar--logo">
        <img src="https://picsum.photos/100/50" alt="logo" width="200px" height="100px" />
      </div>
      <div>
        <FontAwesomeIcon icon={faGear} className='nav-bar__buttons--item' />
      </div>
      <ul className="navigation__bar--items">
        <li>
          <a href="/" className="pestana">Home</a>
        </li>
        <li>
          <a href="/pages" className="pestana">Pages</a>
        </li>
        <li>
          <a href="/about" className="pestana">
            <FontAwesomeIcon icon={faUser} className='nav-bar__buttons--item' />
          </a>
        </li>
        <button>
          <FontAwesomeIcon icon={faBars} className='nav-bar__buttons--item' width="40px" height="40px"/>
        </button>
      </ul>
    </nav>

  )
}

