import React from 'react'
import { useAuth0 } from "@auth0/auth0-react"


const LoginButton = () =>{
    const {loginWithRedirect } = useAuth0()

return(
    <button 
    type="button" 
    name="loginSubmit" 
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 py-4 rounded" 
    onClick={() => loginWithRedirect()}
    > 
    Log In
    </button>
)


}

export default LoginButton
