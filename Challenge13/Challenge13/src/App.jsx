import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../store/counterSlice'

function App() {
  const { counter } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <h1>APP</h1>
      <hr />
      <button className='btn btn-primary' onClick={() => dispatch(decrement())}> -1</button>
      <span>counter is: {counter}</span>
      <button className='btn btn-primary' onClick={() => dispatch(increment())}> +1</button>
    </>
  )
}

export default App
