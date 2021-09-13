import React from 'react'
import { withAuthenticationRequired } from '@auth0/auth0-react'



function MySheets() {



    return(
        <div>

        </div>
    )
}
export default withAuthenticationRequired( MySheets , {
    onRedirecting: () => (<div>Redirecting you to Login Page....</div> )
})