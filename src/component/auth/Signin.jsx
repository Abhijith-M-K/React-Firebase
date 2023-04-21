import React, { useState } from 'react'
import { auth } from '../../firebase-config'
import { signInWithEmailAndPassword } from 'firebase/auth'

const Signin = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const handleSubmit=(e)=>{
      e.preventDefault()
      signInWithEmailAndPassword(auth,email,password).then((useCredantial)=>{
        console.log(useCredantial);
        
      }).catch((error)=>{
        console.log(error);
      })

    }
    
  return (
    <div className='sign-in-container'>
        <form onSubmit={handleSubmit}>
            <h1>Log In</h1>
            <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button type='submit'>Log In</button>

        </form>
    </div>
  )
}

export default Signin