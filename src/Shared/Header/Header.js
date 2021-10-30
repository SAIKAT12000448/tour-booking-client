import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../components/Hooks/useAuth';
// import useFirebase from '../../Firebase/useFirebase';
import './Header.css';



const Header = () => {
          const{user,logout,signInwithGoogle}=useAuth()



    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid ms-lg-5">
    {/* <a className="navbar-brand" href="#">Navbar</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse ms-lg-5" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-items">
        <li className="nav-item me-5 mt-2">
          <Link to="/home">Home</Link>
        </li>
        <li className="nav-item me-5">
          {/* <a className="nav-link" href="#">Link</a> */}
        </li>

        
       { 
       user.displayName &&
       
       <li className="nav-item dropdown me-5">
          <Link className="nav-link dropdown-toggle fw-bold" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Menu
          </Link>
          <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
            <li><Link to="/mybookings"  className="dropdown-item fw-bolder" >My Bookings</Link></li>
            <li><hr className="dropdown-divider text-dark"/></li>
            <li><Link to='/addplan'  className="dropdown-item fw-bolder" >Add a New plan</Link></li>
            <li><hr className="dropdown-divider text-dark"/></li>
            <li><Link to='/manageorders' className="dropdown-item fw-bolder">Manage All Orders</Link></li>
          </ul>
        </li>}


        <li className="nav-item">
          {/* <a className="nav-link disabled">Disabled</a> */}
        </li>
      </ul>

      <div className="me-lg-5 btn d-flex">


            {
                !user?.displayName ? <button onClick={signInwithGoogle} type="button" className="btn btn-success">Log In </button> :
                <button onClick={logout} type="button"className="btn btn-success">Log Out</button>
            }

          <div className="d-flex ms-3">
          <h5 className="me-2 mt-2">{user.displayName}</h5>
          <img width="50px" style={{borderRadius:'50px'}} src={user.photoURL} alt="" />
          </div>
       
      </div>

    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;