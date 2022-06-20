//import logo from './logo.svg';
import React,{useState} from 'react'

import './App.css';
//  import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  const [mode,Setmode]=useState('light')
  const toggleMode=()=>{
    if(mode==='dark'){
      Setmode('light');
      document.body.style.backgroundColor='white'
     
    }
    else{
      Setmode('dark')
      document.body.style.backgroundColor='#042743'
    }
  }
  
  return (
<>
<Navbar tittle="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
{/* <Navbar aboutText="About"/> */}
{/* <div className="container my-3"> */}
<TextForm heading="Enter Text Below" mode={mode}/>
{/* </div> */}
{/* <div className='container'><About/></div> */}
</>
  );
}
export default App;
