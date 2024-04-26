import React from "react";
import "./styles/landingPage.scss";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useAuthContext } from "../components/hooks/useAuthContext";

const SignUpIn = ()=>{
  const history = useHistory()
  const { dispatch } = useAuthContext();
      const [formC, setFormC] = React.useState('signup');

//   const [showForm, setShowForm] = React.useState(false);

// const handleParentClick = ()=>{
//   if (!admin.token) {
//     setFormC('signup');
//     setShowForm(true);
//   }
// }
//     console.log(admin)
    
//   React.useEffect(() => {
//     // Add the window click event listener when the component mounts
//     handleParentClick()

//     // Clean up the event listener when the component unmounts
//     return () => {
//     handleParentClick()
//     };
//   }, [admin.token]);

  const formControlPage = (form)=>{
    if(form === 'signin'){
      setFormC('signin')
    }
    if(form === 'signup') {
      setFormC('signup')
    }
    if(form === 'cancel'){

      setFormC('cancel')
    }
  }

const [loginEmail,setLoginEmail] = React.useState('')
const [loginPassword,setLoginPassword] = React.useState('')
const [signUpPassword,setSignUpPassword] = React.useState('')
const [signUpEmail,setSignUpEmail] = React.useState('')
const [signUpConPassword,setSignUpConPassword] = React.useState('')


 const submitLogin = async function(e){
// alert(loginEmail + '  '+loginPassword)
   try{
    e.preventDefault()
    if(!loginEmail || !loginPassword){
      return alert('All fields are required')
    }

    const form = {email:loginEmail,password:loginPassword}
    const res = await fetch("http://localhost:3800/spart-users/auth", {
      method: 'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(form)
    });

    const json = await res.json()
    if (!res.ok) {
      throw Error(json.message);
    }

    // alert(signUpPassword + '  '+ signUpConPassword +' '+signUpEmail)
    alert(json.message)
    dispatch({ type: "LOGIN", payload: json });
    localStorage.setItem("user", JSON.stringify(json));
    history.push('/')
    
  }catch(error){
    alert(error.message)
    console.log(error.message)
  }
 } 



 const submitSignup = async function(e){
   try{
    e.preventDefault()
    if(!signUpConPassword || !signUpPassword || !signUpEmail){
      return alert('All fields are required')
    }

    if(signUpConPassword !== signUpPassword){
      return alert('passwords do not match')
    }

    const form = {email:signUpEmail,password:signUpPassword}
    const res = await fetch("http://localhost:3800/spart-users/create-user", {
      method: 'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(form)
    });

    const json = await res.json()
    if (!res.ok) {
      throw Error(json.message);
    }

    // alert(signUpPassword + '  '+ signUpConPassword +' '+signUpEmail)
    alert(json.message)
    dispatch({ type: "LOGIN", payload: json });
    localStorage.setItem("user", JSON.stringify(json));
    history.push('/')
    
  }catch(error){
    alert(error.message)
    console.log(error.message)
  }
 } 
    return(
        <div className={`auth-form-container ${(formC === 'cancel') ? 'remove-form':''}`}>
        {/* <div className="cancel" onClick={()=>formControlPage('cancel')}>X</div> */}
        <Link className="cancel" to={'/'}>HOME</Link>
        <div className="form-control">
 
        <form className={`sign-in ${(formC === 'signin') ? 'sin1': ''}`} onSubmit={submitLogin}>
           <div className="container">
           <input type="email" required placeholder="Enter email" value={loginEmail} onChange={(e)=>setLoginEmail(e.target.value)} />
             <input type="password" required placeholder="Enter password" value={loginPassword} onChange={(e)=>setLoginPassword(e.target.value)}/>
             <button>Login</button>
           </div>
           <p>Dont have an account ? <span onClick={()=>formControlPage('signup')}>sign up</span></p>
           </form>
 
 
        <form className={`sign-up ${(formC === 'signup') ? '': 'sin2'}`} onSubmit={(e)=>{submitSignup(e)}}>
          <div className="container">
          <input type="email" placeholder="Enter email" value={signUpEmail} onChange={(e)=>setSignUpEmail(e.target.value)} />
             <input type="password" placeholder="Enter password"  value={signUpPassword} onChange={(e)=>setSignUpPassword(e.target.value)} />
             <input type="password" placeholder="Confirm password"  value={signUpConPassword} onChange={(e)=>setSignUpConPassword(e.target.value)}/>
             <button>Create Account</button>
          </div>
           <p>Have an account ? <span onClick={()=>formControlPage('signin')}>sign in</span></p>
           </form>
 
        </div>
         </div>
    )
}

export default SignUpIn