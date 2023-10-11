
import { Stack, TextField } from '@mui/material';
import './App.css';
import { Button } from '@mui/base';
import { useState } from 'react';




function App() {


  const[principle,setPrinciple]=useState("")
  const[rate,setRate]=useState("")
  const[year,setYear]=useState("")
  const[intrest,setIntrest]=useState(0)

  const calculateIntrest=(reload)=>{
    reload.preventDefault()
  console.log(principle,rate,year);

  if(!principle|| !rate || !year){
    alert("please fill the form............")
  }
  else{
     setIntrest(principle*rate*year/100)
  }
  }

  const resetForm=()=>{
    setPrinciple("")
    setIntrest(0)
    setYear("")
    setRate("")
  }

  return (
    <>
      <div className="app">


        <div className="container">
          {/* Heading section  */}

          <div className="heading-text">
            <h3 className="title">SIMPLE CALCULATOR</h3>
            <p className="title-para"> CALCULATE YOUR SIMPLE INTEREST</p>
          </div>

          <div className="amount-card">

            <div className="card-text">

              <h3 className='total-amount'>₹{intrest}</h3>
              <p className="total-para">Total Simple Interest</p>
            </div>

          </div>



          <form onSubmit={calculateIntrest}>

            {/* to hold text fiels */}
            <div className="text-field">

              {/* priciple amount */}
              <div className="input">
              <TextField value={principle || ""}
               onChange={e=>setPrinciple(e.target.value)} style={{color:"white"}}
              className='filled-basic' id="standard-basic" label="Principle amount" variant="standard" />
              </div>

               {/* intrest */}
               <div className="input">
              <TextField value={rate || ""}
               onChange={e=>setRate(e.target.value)}
              className='filled-basic' id="standard-basic" label="Rate of intrest (p.a)%" variant="standard" />
              </div>

              {/* year */}
              <div className="input">
              <TextField value={year || ""}
               onChange={e=>setYear(e.target.value)}
               className='filled-basic' id="standard-basic" label="Time period(yr)" variant="standard" />


              </div>

            </div>

            {/* button */}
            <div className="btn-group">

              {/* stack- horizontaly vertically one line */}

              <Stack direction="row" spacing={2}>

              <Button type='submit' className='btn' style={{backgroundColor:"#1b1b1b",color:"white",border:"none",fontSize:"16px",borderRadius:"4px"}} variant="contained">Calculate</Button>
              <Button onClick={resetForm} className='btn' style={{backgroundColor:"gray",border:"none",color:"#380202",fontSize:"16px",borderRadius:"4px"}} variant="outlined">Reset</Button>
              
              </Stack>

            </div>


          </form>
          

        </div>


      </div>
    </>
  );
}

export default App;