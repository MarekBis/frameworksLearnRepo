import Cards from "./components/Card";
import Form from "./components/Form";
import { useState } from "react";
export default function App() {
  const [number,setNumber] = useState("");
  const [holder,setHolder] = useState("");
  
  const handleHolderChange = (value) =>{
    setHolder(value);
  }

  const handleNumberChange = (value) =>{
    setNumber(value);
  }

  
  return (
    <div className="grid md:gap-10 md:grid-cols-2">
      <Cards 
      holderName={holder}
      cardNumber={number}
      
      />
      <Form 
      holderName={holder}
      handleNumberChange={handleNumberChange}
      handleHolderChange ={handleHolderChange}
      
      />
    </div>
  )
}