import { useSelector, useDispatch } from 'react-redux'
import {Switch, Route, Link } from "react-router-dom";
import '../styles/main.css'
import Login from './Login'
import Home from './Home.js'
import NewSheet from './NewSheet.js'


function App() {

//to acess a value from the store, use reducers
const loggedIn = useSelector((state) => state.userReducer)

 // dispatch action to store to change value of state
 const dispatch = useDispatch()

if (loggedIn.userName.length > 1){
  return (
     <div className="App">
       <nav>
         <ul>
           <li>
             <Link to="/new">New Sheet</Link>
           </li>
           <li>
             <Link to="/sheets">Your Sheets</Link>
           </li>
         </ul>
       </nav>
       <Switch>
         <Route exact path="/">
           <Home/>
         </Route>
          <Route exact path="/new" >
              <NewSheet/>
          </Route>
       </Switch>
     </div>
  
   );
  } else {
    return (
    <div>
      <Login/>
    </div>
    )
  }
 
}

export default App;
