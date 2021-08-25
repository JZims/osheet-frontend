import React from 'react'
import { useAuth0 } from "@auth0/auth0-react"

const LogoutButton = () =>{

    const { logout } = useAuth0()

    return(
        <button 
        type="button" 
        name="loginSubmit" 
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 py-4 rounded" 
        onClick={logout}
        > 
        Log Out
        </button>
    )

}

export default LogoutButton
