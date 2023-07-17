import { useState, useEffect } from "react";
import { useHotel } from "../../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGooglePlus } from "@fortawesome/free-brands-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import "./index.scss";
import Loading from "../loading/Loading";

const Login = () => {

  const navigate = useNavigate();
  const { state, dispatch } = useHotel()
  // Estado para mantener el array de usuarios registrados
  const [registeredUsers, setRegisteredUsers] = useState([]);
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

  // Function to check if the user exists in LocalStorage or registeredUsers
  const checkUserInLocalStorage = () => {
    const email = formData.email;
    const dataUsers = localStorage.getItem("dataUsers");
    if (dataUsers) {
      const users = JSON.parse(dataUsers);
      const user = users.find((user) => user.email === email);
      if (user) {
        return user;
      }
    }
    const registeredUser = registeredUsers.find((user) => user.email === email);
    return registeredUser;
  };

  useEffect(() => {
    // Retrieve registered users from LocalStorage on component mount
    const registeredUsersData = localStorage.getItem("registeredUsers");
    if (registeredUsersData) {
      setRegisteredUsers(JSON.parse(registeredUsersData));
    }
  }, []);

  const handleTabClick = (isLogin) => {
    setFormData((prevData) => ({
      ...prevData,
      isLoginActive: isLogin,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const user = checkUserInLocalStorage();
      if (user) {
        // User found, proceed with login
        if (user.password === formData.password) {
          // Successful login, handle user data (if needed) and redirect
          dispatch({ type: "SET_USER", payload: user });
          // Redirect to user dashboard or other action
          navigate("/user-dashboard");
          console.log("Successful login!");
        } else {
          setFormData((prevData) => ({
            ...prevData,
            errorMessage: "Contraseña incorrecta",
          }));
        }
      } else {

        dispatch({ type: "LOADING", payload: true });
        // User not found, fetch from API
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/api/user`
        );
        if (response.ok) {
          const users = await response.json();
          const apiUser = users.find((user) => user.email === formData.email);
          if (apiUser) {
            if (apiUser.password === formData.password) {
              // Successful login, handle user data (if needed) and redirect
              dispatch({ type: "SET_USER", payload: apiUser });
              // Redirect to user dashboard or other action
              navigate("/user-dashboard");
              console.log("Successful login from API!");
            } else {
              setFormData((prevData) => ({
                ...prevData,
                errorMessage: "Contraseña incorrecta",
              }));
            }
          } else {
            setFormData((prevData) => ({
              ...prevData,
              errorMessage: "El usuario no está registrado",
            }));
          }
        } else {
          // Handle API error
          console.log("Error en el inicio de sesión");
        }
      }
    } catch (error) {
      // Handle connection or API errors
      console.log("Error:", error);
    } finally {
      dispatch({ type: "LOADING", payload: false });
    }
  };


  // Función para agregar un nuevo usuario al array de usuarios registrados
  const handleRegisterUser = (newUser) => {
    setRegisteredUsers((prevUsers) => [...prevUsers, newUser]);
    // Guardar el array de usuarios actualizado en el LocalStorage
    localStorage.setItem("registeredUsers", JSON.stringify([...registeredUsers, newUser]));
  };

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

    dispatch({ type: "LOADING", payload: true });

    try {
      const signupData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
      };

      // Llamar a la API para registrarse
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/user`,
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
        dispatch({ type: "SET_USER", payload: signupData });
        // Guardar la contraseña en el LocalStorage
        localStorage.setItem("dataUsers", JSON.stringify(signupData));
        // Registro del nuevo usuario en el LocalStorage
        handleRegisterUser(signupData);
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
    } finally {
      dispatch({ type: "LOADING", payload: false });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      errorMessage: name === "confirmPassword" && prevData.password !== value ? "Las contraseñas no coinciden" : "",
    }));
  };

  const togglePasswordVisibility = () => {
    setFormData((prevData) => ({
      ...prevData,
      showPassword: !prevData.showPassword,
    }));
  };

  if (state.loading) {
    return <Loading height="100vh" />;
  }

  return (
    <div className="login-box">
      <div className="lb-header">
        <Link
          to="#"
          className={formData.isLoginActive ? "active" : ""}
          id="login-box-link"
          onClick={() => handleTabClick(true)}
        >
          Login
        </Link>
        <Link
          to="#"
          className={!formData.isLoginActive ? "active" : ""}
          id="signup-box-link"
          onClick={() => handleTabClick(false)}
        >
          Sign Up
        </Link>
      </div>
      <div className="social-login">
        <Link to="#">
          <FontAwesomeIcon icon={faFacebook} className="fa fa-facebook fa-lg" />
          Login with Facebook
        </Link>
        <Link to="#">
          <FontAwesomeIcon
            icon={faGooglePlus}
            className="fa fa-google-plus fa-lg"
          />
          Login with Google
        </Link>
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
