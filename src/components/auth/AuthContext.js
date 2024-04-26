import { createContext,useReducer,useEffect } from "react"

export const AuthContext = createContext();

export const AuthReducer = (state, action)=>{
    switch(action.type){
        case 'LOGIN':
            return {user: action.payload}
        case 'LOGOUT':
            return {user: null}
        default:
            return state
    }
}
 
export const AuthContextProvider = ({children})=>{
const [state, dispatch] = useReducer(AuthReducer,{
    user: {}
})


// lets check if the browser has the token then we get it 
// because by defaul by refreshing the page, react does not keep track of that
useEffect(()=>{
    let user = JSON.parse(localStorage.getItem('user'))
    if(user){
        dispatch({type: 'LOGIN', payload: user})
    }
    // let users = JSON.parse(localStorage.getItem('user')) || {};
    // let loggedInuser = Object.values(users)[0] || null;
    // dispatch({type: 'LOGIN', payload: loggedInuser})
    
},[])

//    console.log('AuthContext state', state)

   return (
    <AuthContext.Provider value={{...state,dispatch}}>
        {children}
    </AuthContext.Provider>
   )
};


