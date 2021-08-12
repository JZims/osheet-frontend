import React from 'react'
import {useDispatch} from 'react-redux'


 function Buttons({ handleUp }) {

    
    const dispatch = useDispatch()

    const handleDown = () => {
        dispatch({type: "dec"})
       
    }

    


    return (
        <div>
            <button onClick= { handleUp }>Number go up</button>
            <br/>
            <button onClick= { handleDown }>Number go down</button>
        </div>
    )
}
export default Buttons
