import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUser, faGear } from '@fortawesome/free-solid-svg-icons'
import "./index.scss"


export default function NavBar() {
  return (
    <nav className="nav-bar">
      <div className="nav-bar--logo">
        <img src="https://picsum.photos/100/50" alt="logo" />
      </div>
      <div className="nav-bar--buttons">
        <FontAwesomeIcon icon={faBars} className='nav-bar__buttons--item' />
        <FontAwesomeIcon icon={faUser} className='nav-bar__buttons--item' />
        <FontAwesomeIcon icon={faGear} className='nav-bar__buttons--item' />
      </div>
    </nav>

  )
}
