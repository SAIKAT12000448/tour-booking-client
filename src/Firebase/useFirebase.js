import { getAuth, signInWithPopup, GoogleAuthProvider, signOut,onAuthStateChanged  } from "firebase/auth";
import { useEffect, useState } from "react";
import intializeAuthentication from "./firebase.init";



intializeAuthentication();
const useFirebase=()=>{
   const[user,setUser]=useState({})
   const[error,setError]=useState('');
   const [isLoading, setIsLoading] = useState(true);


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInwithGoogle=()=>{
        setIsLoading(true);
      return signInWithPopup(auth, googleProvider)
        // .then(result=>{
        //     console.log(result.user)
        //     setUser(result.user)
        // })
        .catch(error=>{
            setError(error.message)
        })
        .finally(() => setIsLoading(false));
    }
    useEffect(()=>{
        onAuthStateChanged(auth,user =>{
            if(user){
                setUser(user)
            }
            setIsLoading(false);

        })
    },[])


    // sign out

    const logout =() =>{
        setIsLoading(true);
        signOut(auth)
        .then(()=>{
            setUser({})
            console.log(user)
        
        })
        .catch((error) => {
           setError(error.message)
        })
        .finally(() => setIsLoading(false));
    }

    return{
        user,signInwithGoogle,error,logout,isLoading
    }

}
export default useFirebase;