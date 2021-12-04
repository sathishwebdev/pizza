import React from 'react'
import * as Icons from '@mui/icons-material'
import { useAuth } from './helpers'

function Profile() {
    let auth = useAuth()
    let data = auth.user
    let {name, username, email, address} = data
    console.log(data);
    return (
        <div className="App">
            <h1>PROFILE</h1>
            <div className="row">
                <div className="pro-card">
                    <h1> <Icons.AccountCircle sx={{ fontSize: 150 }} /> </h1>
                    <h3>{name}</h3>
                    <p style={{fontSize:"small"}} >{email}</p>
                </div>
                <div style={{minWidth:"500px"}}>
                    <table style={{margin:"5px", padding: "2%"}}>
                        <tbody style={{textAlign:"left"}}>
                            <tr>
                                <th>Name : </th>
                                <td>{name}</td>
                            </tr>
                            <tr>
                                <th>username : </th>
                                <td>{username}</td>
                            </tr>
                            <tr>
                                <th>Address : </th>
                                <td>{address}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Profile
