import { useParams } from 'react-router-dom'
import './index.scss'

export default function VerifyAccount() {
  const { token } = useParams()

  const handleClick = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/auth/local/activate/${token}`,
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


