
import { useEffect, useState } from 'react';
import './App.css';
import Auth from './component/Auth';
import { db } from './config/Firebase';
import { getDocs , collection ,addDoc,deleteDoc,doc,updateDoc} from 'firebase/firestore'

function App() {
const movieReference=collection(db,'movies')
const [movieList,setMovieList]=useState([])
const [tittle,setTittle]=useState('')
const [date,setDate]=useState(0)
const [isOskar,setIsOskar]=useState(false)
const [newTittle,setNewTittle]=useState('')
  //fetch the data from firestor sdk 
 
//when the page is loaded data will be fetched
useEffect(()=>{
  const finddata=async()=>{

    const data= await getDocs(movieReference)
    const filteredData=await data.docs.map((document)=>({...document.data(),id:document.id}))
    setMovieList(filteredData)
    }
    finddata()
  },[movieList])
  //to add new data to the firestore inside movie collection
  const setNewInfo=async(e)=>{
   e.preventDefault()
  try{
   await addDoc(movieReference,{
      tittle:tittle,
      date:date,
      oskar:isOskar
     })
     
  }catch(err){
    console.error(err)
    alert(err)
  }
  }

  //delete the given item when we click the delete item
  const deleteItem=async(id)=>{
    try{
      const toBeDelete=await doc(db,'movies',id)
    deleteDoc(toBeDelete)
    }catch(err){
      console.error(err)
      alert(err)
    }
  }

  //update the tittle of the movie
  const updateTittle=async(id)=>{
    const toBeUpdate= doc(movieReference,id)
    await updateDoc(toBeUpdate,{tittle:newTittle})
  }
  return (
    <div className="App">
      <Auth/>

    <div>
       tittle: <input type='text' placeholder='tittle' onChange={(e)=>{setTittle(e.target.value)}}/><br/>
       data:<input type='number' placeholder='date' onChange={(e)=>{setDate(Number(e.target.value))}}/><br/>
       oskar:<input type='checkbox' checked={isOskar} onChange={(e)=>{setIsOskar(e.target.checked)}}/> 
       <button onClick={(e)=>setNewInfo(e)}>Submit</button>
    </div>

      {
        movieList.map((movie)=>(
        <div key={movie.id}>
            <h1 style={{color:(movie.oskar)?"green":"red"}}>{movie.tittle}</h1>
            <p>{movie.date}</p>
            <button onClick={()=>{deleteItem(movie.id)}}>Delete</button>
            <input type='text' onChange={(e)=>{setNewTittle(e.target.value)}}/>
            <button  onClick={()=>updateTittle(movie.id)}>update</button>
        </div> 
        ))
      }
    </div>
  );
}

export default App;
