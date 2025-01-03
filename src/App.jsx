import React, { useState,useEffect, useRef } from 'react'

const App = () => {
  let[value,setValue]=useState(5);
  let[number,addNumber]=useState(false);
  let[char,addChar]=useState(false);
  let[pass,showpass]=useState('');

  let handleChange=(event)=>{
     setValue(event.target.value);
  }

  useEffect(()=>{
    passGenerator()},
    [number,char,value,showpass]
  )

  let passref=useRef(null);

  let password='';
  function passGenerator(){
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let num='1234567890'
    let character='!@#$%^&*()_'
    {
      number?str+=num:'';
      char?str+=character:'';
    }

    for(let i=0;i<value;i++){
       let randomindex=Math.floor(Math.random()*str.length);
       password+=str[randomindex];
    }
    showpass(pass=password)
    console.log(password);
  }

  function handlepassGenerator(){
    passGenerator();
  }

  const copytoClip=()=>{
    window.navigator.clipboard.writeText(pass)
    alert("Password successfully Copied")
  }

  return (
    <div className='bg-slate-950 h-screen flex items-center justify-center'>
      <div className='bg-slate-100 h-56 w-1/3 pt-4 shadow-md rounded-lg shadow-slate-500'>
        <h1 className='text-2xl text-center font-medium  '>Password Generator</h1>
        <div className='mt-4 flex justify-evenly'>
          <input className='rounded-md border-black border-solid border-2 ' type="value" readOnly value={pass}
          ref={passref} />
          <button className='rounded-md border-black border-solid border-2 w-12 bg-blue-800 text-white' onClick={copytoClip}>copy</button>
        </div >
        <div className='flex justify-around mt-9'>
          <div className='flex justify-evenly ml-3'>
          <input type="range" value={value} min={5} max={20} onChange={handleChange}/>
          {value}
          </div>
          <div className='flex justify-around mr-3'>
           <input  type="checkbox" onChange={()=>addNumber(!number)}/>
           <label  htmlFor="">Numbers</label>
           <input type="checkbox" onChange={()=>addChar(!char)}/>
           <label htmlFor="">Characters</label>
          </div> 
        </div>
        <div className='mt-4 flex justify-center'>
          <button className='border-white bg-slate-950 text-white h-8 w-24 rounded-lg shadow-lg shadow-black hover:bg-slate-100 hover:text-slate-950 hover:border-black hover:border-solid hover:border-2 hover:delay-100' onClick={handlepassGenerator}>Generate</button>
        </div>
      </div>
    </div>
  )
}

export default App