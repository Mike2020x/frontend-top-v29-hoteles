import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGooglePlus } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import "./index.scss";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [formData, setFormData] = useState({
    isLoginActive: true,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
    errorMessage: "",
  });

  const handleTabClick = (isLogin) => {
    setFormData((prevData) => ({
      ...prevData,
      isLoginActive: isLogin,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const loginData = {
        phone: formData.phone,
        email: formData.email,
        password: formData.password,
      };
      console.log(loginData);

      // Llamar a la API para iniciar sesión
      const response = await fetch(
        "https://backend-top-v29-hoteles.onrender.com/auth/local/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginData),
        }
      );

      // Manejar la respuesta de la API según sea necesario
      if (response.ok) {
        // Redireccionar al panel de usuario o realizar otra acción
        // window.location.href = "/user-dashboard";
      } else {
        // Manejar el caso de error en el inicio de sesión
        console.log("Error en el inicio de sesión");
      }
    } catch (error) {
      // Manejar errores de conexión o de la API
      console.log("Error:", error);
    }
  };

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    // Verificar si las contraseñas coinciden
    if (formData.password !== formData.confirmPassword) {
      setFormData((prevData) => ({
        ...prevData,
        errorMessage: "Las contraseñas no coinciden",
      }));
      return;
    }

    try {
      const signupData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
      };
      console.log(signupData);
      // Llamar a la API para registrarse
      const response = await fetch(
        "https://backend-top-v29-hoteles.onrender.com/api/user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(signupData),
        }
      );
      console.log(response);
      // Manejar la respuesta de la API según sea necesario
      if (response.ok) {
        // Redireccionar al panel de usuario o realizar otra acción
        const url = `/verify-account/${formData.email}`;
        navigate(url);
      } else {
        // Manejar el caso de error en el registro
        console.log("Error en el registro");
      }
    } catch (error) {
      // Manejar errores de conexión o de la API
      console.log("Error:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setFormData((prevData) => ({
      ...prevData,
      showPassword: !prevData.showPassword,
    }));
  };

  return (
    <div className="login-box">
      <div className="lb-header">
        <a
          href="#"
          className={formData.isLoginActive ? "active" : ""}
          id="login-box-link"
          onClick={() => handleTabClick(true)}
        >
          Login
        </a>
        <a
          href="#"
          className={!formData.isLoginActive ? "active" : ""}
          id="signup-box-link"
          onClick={() => handleTabClick(false)}
        >
          Sign Up
        </a>
      </div>
      <div className="social-login">
        <a href="#">
          <FontAwesomeIcon icon={faFacebook} className="fa fa-facebook fa-lg" />
          Login with Facebook
        </a>
        <a href="#">
          <FontAwesomeIcon
            icon={faGooglePlus}
            className="fa fa-google-plus fa-lg"
          />
          Login with Google
        </a>
      </div>
      {!formData.isLoginActive && (
        <form className="email-signup" onSubmit={handleSignUp}>
          <div className="u-form-individual">
            <input
              type="text"
              placeholder="FirstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="LastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="u-form-group">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="u-form-group">
            <input
              type="text"
              placeholder="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="u-form-group">
            <div className="input-with-icon">
              <input
                type={formData.showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <i onClick={togglePasswordVisibility}>
                {formData.showPassword ? (
                  <FontAwesomeIcon icon={faEyeSlash} />
                ) : (
                  <FontAwesomeIcon icon={faEye} />
                )}
              </i>
            </div>
          </div>
          <div className="u-form-group">
            <div className="input-with-icon">
              <input
                type={formData.showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <i onClick={togglePasswordVisibility}>
                {formData.showPassword ? (
                  <FontAwesomeIcon icon={faEyeSlash} />
                ) : (
                  <FontAwesomeIcon icon={faEye} />
                )}
              </i>
            </div>
          </div>
          {formData.errorMessage && (
            <div className="error-message">{formData.errorMessage}</div>
          )}
          <div className="u-form-group">
            <button type="submit">Sign Up</button>
          </div>
        </form>
      )}
      {formData.isLoginActive && (
        <form className="email-login" onSubmit={handleLogin}>
          <div className="u-form-group">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="u-form-group">
            <div className="input-with-icon">
              <input
                type={formData.showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <i onClick={togglePasswordVisibility}>
                {formData.showPassword ? (
                  <FontAwesomeIcon icon={faEyeSlash} />
                ) : (
                  <FontAwesomeIcon icon={faEye} />
                )}
              </i>
            </div>
          </div>
          {formData.errorMessage && (
            <div className="error-message">{formData.errorMessage}</div>
          )}
          <div className="u-form-group">
            <button type="submit">Log In</button>
          </div>
          <div className="forgot-password">
            <Link to="/forgot-password">Forgot password?</Link>
          </div>
        </form>
      )}
    </div>
  );
};

export default Login;
