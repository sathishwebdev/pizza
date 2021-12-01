import React from 'react'
import { useAuth } from './helpers'

function Profile() {
    let auth = useAuth()
    let data = auth.user
    console.log(data);
    return (
        <div>
            
        </div>
    )
}

export default Profile
