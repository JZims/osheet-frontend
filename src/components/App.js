import { useSelector } from 'react-redux'
import {Switch, Route, Link } from "react-router-dom";

//tailwindcss style file
import '../styles/main.css'

import Nav from './Nav'
import Home from './Home.js'
import NewSheet from './NewSheet.js'


function App() {


  return (
    <div>
      
           <Switch>
             <Route exact path="/">
               <Home/>
             </Route>
              <Route exact path="/new" >
                  <NewSheet/>
              </Route>
           </Switch>
      </div>
  )
}

export default App;


//to acess a value from the store, use reducers
// const loggedIn = useSelector((state) => state.userReducer)

//  // dispatch action to store to change value of state
// //  const dispatch = useDispatch()

// if (loggedIn.userName.length > 1){
//  
  
//    );
//   } else {
//     return (
//     <div>
//       <Login/>
//     </div>
//     )
//   }
 