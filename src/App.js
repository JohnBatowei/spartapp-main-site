// import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import ForOFor from "./components/ForOFor";
import Details from "./components/Details";
import DetailsProduct from "./components/DetailsProducts";
import SignUpIn from "./components/SignUp.In";
import { useEffect, useState } from "react";
import PaymentPage from "./components/PaymentPage";

// import AuthForm from "./components/AuthForm"; 

function App() {
  const [status,setStatus] = useState('')
const myStyle = {
 first:{
  display:'flex',
  background:'steelblue',
  height:'100vh',
  width:'100%',
  alignItems:'center',
  placeContent: 'center',
  fontSize:'2rem',
  color:'white'
 }
}
const handleStatus = async function(){
try {
  const res = await fetch('http://localhost:3800/spart-users/status',{
    method:"GET"
  })
  if(!res.ok){
    throw Error('cant fetch')
  }
  const json = await res.json()
  
  // console.log(json.message[0].status)
  setStatus(json.message[0].status)
} catch (error) {
  console.log(error.message)
  if(error.message === 'Failed to fetch'){
    setStatus('true')
  }
}
}

useEffect(()=>{
 handleStatus() 
},[])
// localStorage.clear()
  return (
    <>
{
     status.toString() === 'true' ?
     <Router>
     <Switch>
     <Route exact path='/' component={LandingPage}/>
     <Route path='/sign-up-in' component={SignUpIn}/>
     <Route path='/payment-page' component={PaymentPage}/>
     <Route path='/product/:id' component={Details}/>
     <Route path='/product-Sale-Page/:s/:st/:pd' component={DetailsProduct}/>
     <Route path='*' component={ForOFor}/>
     </Switch>
     </Router>
  : <div style={myStyle.first}> Please come back later. The Engineers are working on this site...</div>
}
    </>
  );

  
}

export default App;
