import React, { useRef, useState } from 'react'
import "../components/otp.css"
type InputType = {
    totalInput: number;
    onChange: (otp:string) => void;
}

export const Input = ({totalInput,onChange}:InputType) => {
    const [otp,setotp] = useState("");
    const inputRef = useRef<HTMLInputElement[]>([]);
     console.log(otp)
  return (
    <div className="inputhere">
        <h2>ENTER OTP</h2>
        {new Array(totalInput).fill(1).map((item,index)=>(
              <input 
              onChange ={(e)=>{
                  setotp(e.target.value);
              }}
              onKeyUp={(e) =>{
               if(e.code === "Backspace") {
                  if(inputRef.current[index-1] !== undefined){
                      inputRef.current[index-1].focus();
                      inputRef.current[index-1].select()
                  }
                 
               }
               else {
                   if(inputRef.current[index+1]== undefined) {
                       inputRef.current[index].focus();
                   }
                   else{
                       inputRef.current[index+1].select();
                       inputRef.current[index+1].focus()
                   }
               }
               onChange(otp)
              }}
              
              ref = {(element)=> {
                  if(inputRef.current && element) {
                      inputRef.current[index] = element
                  }
              }}
              key={index}
              type="text" maxLength={1} className="otpclass" />
        ))}
       
    </div>
  )
}
