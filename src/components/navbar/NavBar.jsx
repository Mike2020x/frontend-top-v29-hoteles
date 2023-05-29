import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUser, faGear } from '@fortawesome/free-solid-svg-icons'
import "./index.scss"

export default function NavBar() {
  return (
    <nav className="navigation__bar">
      <div className="navigation__bar--logo">
        <img src="https://picsum.photos/100/50" alt="logo" width="200px" height="100px" />
      </div>
      <div className="navigation__bar--items">


        <FontAwesomeIcon icon={faGear} className='nav-bar__buttons--item' />
      </div>
      <ul className="navigation__bar--items">
        <li>
          <NavLink to="/" className="pestana">Home</NavLink>
        </li>
        <li>
          <NavLink to="/pricing" className="pestana">
            Pricing
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="pestana">
            <FontAwesomeIcon icon={faUser} className='nav-bar__buttons--item' />
          </NavLink>
        </li>
        <button>
          <FontAwesomeIcon icon={faBars} className='nav-bar__buttons--item' width="40px" height="40px"/>
        </button>
      </ul>
    </nav>

  )
}

