import { useParams } from 'react-router-dom'

import './index.scss'



export default function VerifyAccount() {
  const { token } = useParams()

  const handleClick = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/auth/verify-account/${token}`,
        {
          method: 'GET',
          headers: {
            'content-type': 'application/json',
          }
        }
      )
      const data = await response.json()
      if (data.success) {
        alert(data.message)
      } else {
        alert(data.message)
      }
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <>
      <div>
        <h2>Activate your account</h2>
        <button type='button' onClick={handleClick}>
          Please click the button below to activate your account.
        </button>
      </div>
    </>
  )
}



const handleLogin = async (e) => {
  e.preventDefault();

  try {
    // Llamar a la API para iniciar sesión
    const response = await fetch(
      "https://backend-top-v29-hoteles.onrender.com/auth/local/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

    // Manejar la respuesta de la API según sea necesario
    if (response.ok) {
      // Redireccionar al panel de usuario o realizar otra acción
      window.location.href = "/user-dashboard";
    } else {
      // Manejar el caso de error en el inicio de sesión
      console.log("Error en el inicio de sesión");
    }
  } catch (error) {
    // Manejar errores de conexión o de la API
    console.log("Error:", error);
  }
};
