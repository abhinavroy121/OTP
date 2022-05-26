import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Input } from './components/Input';

function App() {
  const handleChange = (otp:string) =>{
      console.log("otp",otp)
  }
  return (
    <div className="App">
    
       <Input totalInput={5} onChange={handleChange}/>
    </div>
  );
}

export default App;
