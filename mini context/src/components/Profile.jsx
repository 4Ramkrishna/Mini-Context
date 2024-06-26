import React, { useContext } from 'react'
import UserContext from '../context/UserContext/UserContext'

function Profile() {
    const { user } = useContext(UserContext)
    if(!user) return <div>Please Login!</div>

    return(
        <div>
            <h1>Jai Shree Ram! { user.username }</h1>
        </div>
    )

}

export default Profile
