import React from 'react'
import { NavLink as RouterNavLink } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from './login-button'
import LogoutButton from './logout-button'


function MainNav() {
    return (
	 <div className="flex justify-between">
		 <div className="flex space-x-7">
             <div>
                    <RouterNavLink className="flex items-center py-4 px-2" to="/new">
                        <span className="font-semibold text-gray-500 text-lg">Create A New Sheet</span>
                    </RouterNavLink>
                    <RouterNavLink className="flex items-center py-4 px-2" to="/mySheets">
                        <span className="font-semibold text-gray-500 text-lg">View Your Sheets</span>
                    </RouterNavLink>
            </div>		
		</div>
	</div>
		
    )
}

function AuthNav() {
    const { isAuthenticated } = useAuth0()
    console.log(isAuthenticated)
    return(
        <div className="bg-white shadow-lg justify-end">
            {isAuthenticated ? <LogoutButton/> : <LoginButton/> }
        </div>
    )
}


function NavBar(){
    const { isAuthenticated } = useAuth0()
   return( 
        <nav className="bg-white shadow-lg">
		    <div className="max-w-6xl mx-auto px-4">
                {isAuthenticated ? <MainNav/> : null }
                <AuthNav/> 
            </div>
        </nav>
   )
}

export default NavBar

