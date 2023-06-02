import "./index.scss"

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard__info">
        <img className="dashboard__info--img" src="https://picsum.photos/200/200" alt="photo" />
        <h3>Mark Enderess</h3>
        <p>+91123-456-7890</p>
        <p>mark.enderess@mail.com</p>
      </div>
      <nav className="dashboard__nav">
        <ul className="dashboard__nav__ul">
          <li className="dashboard__nav__ul--item"><a href="#">Dashboard</a></li>
          <li className="dashboard__nav__ul--item"><a href="#">Profile</a></li>
          <li className="dashboard__nav__ul--item"><a href="#">Bookings</a></li>
          <li className="dashboard__nav__ul--item"><a href="#">Cards and Payments</a></li>
        </ul>
      </nav>
      <div className="dashboard__profile">
        <div className="dashboard__profile__title"><h3>Profile</h3> <a href="#">Edit</a></div>
        <div className="dashboard__profile__info">
          <div className="dashboard__profile__info--item">
            <h4>Name</h4> <span>Mark Enderess</span>
          </div>
          <div className="dashboard__profile__info--item">
            <h4>Birthday</h4> <span>25/12/1990</span>
          </div>
          <div className="dashboard__profile__info--item">
            <h4>Gender</h4> <span>Female</span>
          </div>
          <div className="dashboard__profile__info--item">
            <h4>Street Address</h4> <span>549 Sulphur Springs Road</span>
          </div>
          <div className="dashboard__profile__info--item">
            <h4>City/State</h4> <span>Downers Grove, IL</span>
          </div>
          <div className="dashboard__profile__info--item">
            <h4>Zip</h4> <span>60515</span>
          </div>
        </div>
      </div>
      <div className="dashboard__profile__login-details">
        <div className="dashboard__profile__login-details__title"><h3>Login Details</h3></div>
        <div className="dashboard__profile__login-details--item">
          <h4>Email Adress</h4> <span>mark.enderess@mail.com</span> <a href="#">Edit</a>
        </div>
        <div className="dashboard__profile__login-details--item">
          <h4>Phone No</h4> <span>+91123-456-7890</span> <a href="#">Edit</a>
        </div>
        <div className="dashboard__profile__login-details--item">
          <h4>Password</h4> <span>******</span> <a href="#">Edit</a>
        </div>
      </div>
    </div>
  )
}
