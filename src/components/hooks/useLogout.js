import { useAuthContext } from "./useAuthContext";
import Cookies from 'js-cookie';

export const useLogout = ()=>{
   const { dispatch } = useAuthContext()

   const logout = ()=>{
    // remove user from storage
    localStorage.removeItem('user')

    // delete JWT cookie
    Cookies.remove('token')

    // dispatch logout action
    dispatch({type: 'LOGOUT'})
   }

   return {logout}
}
