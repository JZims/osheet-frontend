import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Nav from './Nav'
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react'


function Home(){
    
    const { user, isAuthenticated, getAccessTokenSilently } = useAuth0()

    useEffect( () => {
        const domain = process.env.API_DOMAIN

        try {
            const accessToken = await getAccessTokenSilently({
                audience: `${domain}`, 
                scope: "read:current_user", 
            })
            const userSheetsByIdUrl = `${domain}/users/`
        }
    })


    return(
    <div>
        <Nav/>
        <p>This is Home</p>
    </div>
        
        
    )

}
export default withAuthenticationRequired( Home , {
    onRedirecting: () => (<div>Redirecting you to Login</div> )
})