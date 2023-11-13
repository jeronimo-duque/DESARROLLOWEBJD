import React from "react";
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

export const useCounter = (value) => { 

    const  [counter, setCounter] = useState( value )
  
    const handleAdd = () => {
      console.log('LlmarHandle')
      setCounter( counter + 1)
    }
  
    const handleSubstract = () => {
      console.log('llamando handleSubstract')
      setCounter(counter - 1)
  }
  
  const handleReset = () => {
      console.log('llamando handleReset')
      setCounter(value * 0)
  }
  
    return {
        counter,
        increment: handleAdd,
        decrement: handleSubstract,
        reset: handleReset,
      
    }
  }