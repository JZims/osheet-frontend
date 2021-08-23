import React from 'react'
import { NavLink as RouterNavLink } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from './login-button'
import LogoutButton from './logout-button'


function Nav() {




    return (
        <nav class="bg-white shadow-lg">
		    <div class="max-w-6xl mx-auto px-4">
			    <div class="flex justify-between">
				    <div class="flex space-x-7">
                        <div>
                            <RouterNavLink class="flex items-center py-4 px-2" to="/new">
                                <span class="font-semibold text-gray-500 text-lg">Create A New Sheet</span>
                            </RouterNavLink>
                            <RouterNavLink class="flex items-center py-4 px-2" to="/sheets">
                                <span class="font-semibold text-gray-500 text-lg">View Your Sheets</span>
                            </RouterNavLink>
                        </div>
					
					</div>
				</div>
			</div>
        </nav>
    )
}
export default Nav

/*
function handleLogin(e) {
    e.preventDefault()
    dispatch({type: "login", name: e.target.userInput.value, password: e.target.passInput.value})
    // dispatch({})

    }



 <form id="loginForm" onSubmit={handleLogin}>
                <label for="userInput">Username:</label>
                <input type="text" id="userInput" name="userInput"></input>
                <br/>
                <br/>
                <label for="passInput">Password:</label>
                <input type="text" id="passInput" name="passInput"></input>
                <br/>
                <br/>
                <button type="submit" name="loginSubmit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 py-4 rounded">Log In</button>
                <p>Or</p>
                <button type="button" name="signup" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 py-4 rounded">Sign Up</button>
            </form> 
*/