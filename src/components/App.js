
import {Switch, Route, Link } from "react-router-dom";

//tailwindcss style file
import '../styles/main.css'
import Nav from './Nav'
import MySheets from './MySheets.js'
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
              <Route exact path="/mySheets" >
                  <MySheets/>
              </Route>
           </Switch>
      </div>
  )
}

export default App;


//to acess a value from the store, use reducers
