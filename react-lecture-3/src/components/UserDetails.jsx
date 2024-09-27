import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UserDetails = () => {
    const {name} = useParams()
    const navigate = useNavigate();

    const gobackHandler = () => {
        // navigate(-1);
        navigate('/user')
    }

  return (
    <div>
      <h2>Hii {name}</h2>
      <button onClick={gobackHandler}>Go back</button>
    </div>
  )
}

export default UserDetails
