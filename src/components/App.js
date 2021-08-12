import { useSelector, useDispatch } from 'react-redux'
import '../App.css';
import Buttons from './Buttons'

function App() {

//to acess a value from the store, use reducers
const count = useSelector((state) => state.countReducer.count)

 // dispatch action to store to change value of state
 const dispatch = useDispatch()

 const handleUp = () => {
  dispatch({type: "inc"})
}   


  return (
    <div className="App">
      <p>Current Count:   </p> 
      {count}
      <Buttons handleUp ={ handleUp }/>
    </div>
  );
}

export default App;
