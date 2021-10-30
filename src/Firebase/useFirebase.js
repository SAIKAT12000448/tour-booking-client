import { getAuth, signInWithPopup, GoogleAuthProvider, signOut,onAuthStateChanged  } from "firebase/auth";
import { useEffect, useState } from "react";
import intializeAuthentication from "./firebase.init";



intializeAuthentication();
const useFirebase=()=>{
   const[user,setUser]=useState({})
   const[error,setError]=useState('');


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInwithGoogle=()=>{
      return signInWithPopup(auth, googleProvider)
        // .then(result=>{
        //     console.log(result.user)
        //     setUser(result.user)
        // })
        .catch(error=>{
            setError(error.message)
        })
    }
    useEffect(()=>{
        onAuthStateChanged(auth,user =>{
            if(user){
                setUser(user)
            }
            
        })
    },[])


    // sign out

    const logout =() =>{
        signOut(auth)
        .then(()=>{
            setUser({})
            console.log(user)
        
        })
        .catch((error) => {
           setError(error.message)
          });
    }

    return{
        user,signInwithGoogle,error,logout
    }

}
export default useFirebase;