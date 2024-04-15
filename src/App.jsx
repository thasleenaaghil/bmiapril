
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { colors } from '@mui/material';

function App() {
  const[height,setheight]=useState(0)
  const[Weight,setweight]=useState(0)
  const[BMI,setBMI]=useState(0)
  const[status,setstatus]=useState("")

  //conditionally render
  const [isheight,setisheight]=useState(true)
  const[isweight,setisweight]=useState(true)

  const validate =(e)=>{
  
  const{name,value}=e.target 
  //get the value in name
  console.log(name)
  console.log(value)
  //regular expression
   /* console.log(!!value.match(/^[0-9]*$/));*/
   if(!!value.match(/^[0-9]*$/)){
    if(name=='height'){
      setheight(value)
      setisheight(true)
    }
    else if (name=='weight'){
      setweight(value)
      setisweight(true)
    }
    
   }else{
   if(name=='height'){
    setheight(value)
    setisheight(false)
   }else if (name=='weight'){
    setweight(value)
    setisweight(false)
   }
   
   }
   

}
const handleReset=()=>{
  setheight(0)
  setweight(0)
  setBMI(0)
}
//calculate bmi
const handleCalculate=()=>{
  let bmi=(((Weight)/(height)/(height))*10000).toFixed(2)

  setBMI(bmi);
  let bmistatus = getstatus(bmi)
  setstatus(bmistatus);
}
function getstatus(bmi){
  if(bmi <18.5) return "underweight";
  else if(bmi>=18.5 && bmi<24.9) return "Healthy";
  else if(bmi>=25 && bmi <29.9) return "Overweight";
  else return "Obese"
}

  return (
    <>
     <div className='main'>
      <div className='sub p-5'><h1>BMI CALCULATOR</h1>
     
       <form action="" className='mt-5'>
         <TextField id="outlined-basic"  label="Height(in Cm)" value={height||''}variant="outlined"className='w-100 ' onChange={(e)=>validate(e)} name='height' />
         {!isheight && <p className='text-danger'>invalid input</p>}
         <TextField id="outlined-basic"   label="Weight(in Kg)" value={Weight||''} variant="outlined"className='w-100 mt-3' onChange={(e)=>validate(e)} name='weight'/>
         {!isweight && <p className='text-danger'>invalid input</p>}
        
         </form>
         <div className='d-flex mt-4 '>
         <Button variant="contained"className='w-50 p-3 me-3' color='success' disabled={isheight && isweight?false:true} onClick={handleCalculate} >Calculate</Button>
         <Button variant="outlined"className='w-50 p-3' color='primary' onClick={handleReset}>Reset</Button>
         </div>
         <div className='w-100 d-flex justify-content-center align-items-center result  mt-5 shadow flex-column'> 
      <p className='pt-4'>Your BMI Is</p>
         <h1 className='pt-1 fs-2'>{BMI} </h1>
         <p className='text-danger fs-3'>{status}</p>
       </div>
      </div>

     </div>
    </>
  )
}
export default App
