import React, {useRef,useState} from "react";

import Records from './records.json';
import './App.css';

function App() {

const nameInput= useRef(null);

const [btn,setBtn]=useState('Subscribe');

const [followBtn,setfollowBtn]=useState('Follow');

const change=()=>{
  setBtn('Subscribed');


}


const changeFollow=(props)=>{
  console.log(props.key);
  
  setfollowBtn('Followed');


}
  return (
    <div className="App">
      <h1 style={{color:"blue"}}>List of  Ongoing Projects</h1>
      <hr/>

      {
        Records.map((record,idx) => {
          return (
            <div className="box" key={record.id}>
              <h2 style={{color:"green", fontSize:"30px"}}>{record.title} <br/></h2>
              <h4>{record.description} </h4>
              <button onClick={change}  ref={nameInput}
               style={{color:"red", fontSize:"30px"}}>{btn}</button>

              <button onClick={changeFollow}  key={idx}
               style={{color:"red", fontSize:"30px"}}>{followBtn}</button>


              <hr/> 
              
              </div>
              
          )
        })
      }



    </div>
  );
}

export default App;
