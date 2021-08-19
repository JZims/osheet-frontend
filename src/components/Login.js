import React from 'react'
import { useSelector, useDispatch } from 'react-redux'



export default function Login() {

const dispatch = useDispatch()

function handleLogin(e) {
    e.preventDefault()
    dispatch({type: "login", name: e.target.userInput.value, password: e.target.passInput.value})
    // dispatch({})

}


    return (
        <div class="p-4 m-4 bg-green-600">
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
        </div>
    )
}
