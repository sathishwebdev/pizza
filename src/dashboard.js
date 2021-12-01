import React from 'react'
import { useAuth } from './helpers'

function Dashboard() {
    const auth = useAuth()
    const data = auth.user
    const userCount = data.length

    return (
        <div className="App">

            <h2>Dashboard</h2>
            <p>Total users is {userCount}</p>

            <ol style={{listStyleType:"decimal"}}>
               { data.map(({username})=>(
                   <li> {username} </li>
                ))}
            </ol>
            
        </div>
    )
}

export default Dashboard
