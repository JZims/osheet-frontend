import React from 'react'
import Nav from './Nav'
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react'


function Home(){
    const { getAccessTokenSilently } = useAuth0()

    console.log(getAccessTokenSilently())
    return(
        <Nav/>
    )

}
export default withAuthenticationRequired( Home , {
    onRedirecting: () => (<div>Redirecting you to Login</div> )
})