import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGooglePlus } from '@fortawesome/free-brands-svg-icons';
import './index.scss';
import { Link } from 'react-router-dom';

const Login = () => {
  const [isLoginActive, setIsLoginActive] = useState(true);

  const handleTabClick = (isLogin) => {
    setIsLoginActive(isLogin);
  };

  return (
    <div className="login-box">
      <div className="lb-header">
        <a
          href="#"
          className={isLoginActive ? 'active' : ''}
          id="login-box-link"
          onClick={() => handleTabClick(true)}
        >
          Login
        </a>
        <a
          href="#"
          className={!isLoginActive ? 'active' : ''}
          id="signup-box-link"
          onClick={() => handleTabClick(false)}
        >
          Sign Up
        </a>
      </div>
      <div className="social-login">
        <a href="#">
          <FontAwesomeIcon icon={faFacebook} className="fa fa-facebook fa-lg" />
          Login in with Facebook
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faGooglePlus} className="fa fa-google-plus fa-lg" />
          Login in with Google
        </a>
      </div>
      {isLoginActive ? (
        <form className="email-login">
          <div className="u-form-group">
            <input type="email" placeholder="Email" />
          </div>
          <div className="u-form-group">
            <input type="password" placeholder="Password" />
          </div>
          <div className="u-form-group">
            <button><Link to="/user-dashboard">Log in</Link></button>
          </div>
          <div className="u-form-group">
            <a href="#" className="forgot-password">
              Forgot password?
            </a>
          </div>
        </form>
      ) : (
        <form className="email-signup">
          <div className="u-form-group">
            <input type="email" placeholder="Email" />
          </div>
          <div className="u-form-group">
            <input type="password" placeholder="Password" />
          </div>
          <div className="u-form-group">
            <input type="password" placeholder="Confirm Password" />
          </div>
          <div className="u-form-group">
            <button>Sign Up</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default Login;
