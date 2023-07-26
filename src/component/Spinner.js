import React from 'react'
import "../App.css"
//Higher order Component
const Spinner = (WrappedComponent) => {
  return ({ isLoading , ...otherProps})=>{
    if (isLoading){
        return <div className='loading'>Loading...</div>
    }
    return <WrappedComponent {...otherProps}/>
  }
}

export default Spinner
