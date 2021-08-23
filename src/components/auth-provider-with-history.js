import React from 'react'
import { useHistory } from 'react-router'
import { Auth0Provider } from '@auth0/auth0-react' 

function Auth0ProviderWithHistory({ children }) {
    const history = useHistory()
    //variables stored in .env file
    const domain = process.env.REACT_APP_AUTH0_DOMAIN
    const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID

    //Pushes redirect path from Auth0 into react-router history
    //calling inside the component
    const onRedirectCallback = (appstate) => {
        history.push(appstate?.returnTo || window.location.pathname)
    }
    

    return(
        //providing children context for the rest of the app
        <Auth0Provider
          domain = {domain} 
          clientId = {clientId}  
          redirectUri = { window.location.origin }
          onRedirectCallback = { onRedirectCallback }  
        >
            {children}
        </Auth0Provider>
    )
}
export default Auth0ProviderWithHistory