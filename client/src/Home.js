import React from 'react'
import {Link} from 'react-router-dom'


function Home() {
  return (
    <div className="text-center m-3" ><Link className='btn btn-primary' to="/login" >Login</Link></div>
  )
}

export default Home