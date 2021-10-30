import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../Hooks/useAuth';

const Login = () => {
    const{user,signInwithGoogle}=useAuth();
   const location = useLocation();
   const history = useHistory();
   const redirect_uri =  location.state?.from || '/home';

const handlegoogleSignin=()=>{
    signInwithGoogle()
    .then(result =>{
        history.push(redirect_uri);
    })
}


    return (
        <div className="text-center">
            <h1 className=" mt-5 text-success">please Log In!!</h1>
           
                 <button onClick={handlegoogleSignin} type="button" className="btn btn-danger mt-5"><i className="fab fa-google-plus text-white me-3 fs-4 "></i><span className="fw-bold fs-4">Google Sign In</span></button> 
          
        </div>
    );
};

export default Login;