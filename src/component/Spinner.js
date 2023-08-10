import React from 'react'
import "../App.css"

//Higher order Component
const Spinner = (WrappedComponent) => {
  return ({ isLoading , ...otherProps})=>{
    if (isLoading){
        return <div className='loading'><h1>Loading...Coming from Higher Order Component</h1></div>
    }
    return <WrappedComponent {...otherProps}/>
  }
}

export default Spinner
