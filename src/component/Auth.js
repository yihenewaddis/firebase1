import React, { useState } from 'react'
import { auth,googleProvider} from '../config/Firebase'
import {createUserWithEmailAndPassword,signInWithPopup,signOut} from 'firebase/auth'
const Auth = () => {

const [email,setEmail]=useState('')
const [Password,setPassword]=useState(null)
// console.log(auth?.currentUser?.photoURL)
const signIn=async()=>{
try{
    await createUserWithEmailAndPassword(auth,email,Password) 
}catch(err){
    alert(err)
    console.log(err)
}
}
//for sign in by google account
const signInWithgoogle=async()=>{
 try {
    await signInWithPopup(auth,googleProvider)
 }catch(err){
    alert(err)
    console.log(err)
 } 
}
//for signout from the page
const signout=async()=>{
   try{
    await signOut(auth)
    alert('signout seccesfully')
    } catch(err){
    alert(err)
    console.log(err)
   }
}
return( 
<div>
    <input type='email' placeholder='Email...' onChange={(e)=>{setEmail(e.target.value)}}/><br/>
    <input type='password' placeholder='Password...' onChange={(e)=>{setPassword(e.target.value)}}/><br/>
    <button onClick={signIn}>Sign In</button>
    <button onClick={signInWithgoogle}>Sign_In With google</button>
    <button onClick={signout}>signOut</button>
</div>
)
}

export default Auth
