import { useHotel } from "../../context"
import "./index.scss"

export default function Dashboard() {

  const { state: {user} } = useHotel()

  return (
    <div className="dashboard">
      <div className="dashboard__info">
        <img className="dashboard__info--img" src="/user.png" alt="user" />
        <h3>{`${user.firstName} ${user.lastName}`}</h3>
        <p>{`${user.phone}`}</p>
        <p>{`${user.email}`}</p>
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
            <h4>Name</h4> <span>{`${user.firstName} ${user.lastName}`}</span>
          </div>
          <div className="dashboard__profile__info--item">
            <h4>Birthday</h4> <span>25/12/1990</span>
          </div>
          <div className="dashboard__profile__info--item">
            <h4>Gender</h4> <span>Male</span>
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
          <h4>Email Adress</h4> <span>{`${user.email}`}</span> <a href="#">Edit</a>
        </div>
        <div className="dashboard__profile__login-details--item">
          <h4>Phone No</h4> <span>{`${user.phone}`}</span> <a href="#">Edit</a>
        </div>
        <div className="dashboard__profile__login-details--item">
          <h4>Password</h4> <span>{`${user.password}`}</span> <a href="#">Edit</a>
        </div>
      </div>
    </div>
  )
}
