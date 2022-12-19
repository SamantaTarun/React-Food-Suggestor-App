import React, { useReducer } from 'react'


const reducer = (state,action) =>{
    if(action.type==="DECREMENT" && state===0)
      return state;
    if(action.type==="INCREMENT")
      return state+1;
    if(action.type==="DECREMENT")
      return state-1;
    return state;
}
const UseReducer= () => {

  const initialState=0;
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
       <>
      <div className="center_div">
        <p>{state}</p>
        <div class="button2" onClick={() => dispatch({type: "INCREMENT"})}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div class="button2" onClick={() => dispatch({type: "DECREMENT"})}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
      </div>
    </>
  )
}

export default UseReducer
