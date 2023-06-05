import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faGear, faCircleCheck, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import "./index.scss";
import { Link } from 'react-router-dom';

export default function NavBar() {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <nav className={`navigation__bar ${showSidebar ? 'show-sidebar' : ''}`}>
      <div className="navigation__bar--logo">
        <FontAwesomeIcon icon={faCircleCheck} size="2xl" />
        <h1>RICA</h1>
      </div>
      <ul className="navigation__bar--items">
        <li><a href="/" >HOME</a></li>
        <li><a href="/pages" >PAGES</a></li>
      </ul>
      <div className="navigation__bar--content">
        <button onClick={toggleSidebar} className="nav-bar__buttons--item">
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className="configuration">
          <div className="navigation__bar--items">
            <select className="money">
              <option value="USD">USD</option>
              <option value="PEN">PEN</option>
              <option value="COP">COP</option>
            </select>
          </div>
          <div className="navigation__bar--items">
            <select className="language">
              <option value="ENG">ENG</option>
              <option value="ESP">SPA</option>
              <option value="FRA">FRA</option>
            </select>
          </div>
          <button>
            <Link to="/signup"><FontAwesomeIcon icon={faUser} /></Link>
          </button>
          <button id="faGear" className="nav-bar__buttons--item">
            <FontAwesomeIcon icon={faGear} />
          </button>
        </div>
      </div>
      <div className={`sidebar ${showSidebar ? 'show' : ''}`}>
        <button onClick={toggleSidebar} className="back">BACK <FontAwesomeIcon icon={faAngleLeft} rotation={180} /></button>
        <button><a href="/" className="home">HOME</a></button>
        <button><a href="/pages" className="pages">PAGES</a></button>
      </div>
    </nav>
  );
}
