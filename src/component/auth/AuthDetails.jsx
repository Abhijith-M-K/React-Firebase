import { onAuthStateChanged,signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth } from '../../firebase-config'


const AuthDetails = () => {
    const [user,setUser]=useState(null)
    useEffect(()=>{
        const listen=onAuthStateChanged(auth,(user)=>{
            if(user){
                setUser(user)
            }else{
                setUser(null)
            }

        })
        return ()=>{
            listen()
        }
    },[])
    const userSignout=()=>{
        signOut(auth).then(()=>{
            console.log("sign out successfull");

        }).catch(error => console.log(error))
       
    }
  return (
    <div>{user?<><p>{`signed In as ${user.email}`}</p><button onClick={userSignout}>Signout</button></>:<p>Signed out</p>}</div>
  )
}

export default AuthDetails