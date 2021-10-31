
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Addplans from './components/Addplans/Addplans';
import Booking from './components/Addplans/Booking/Booking';
import Home from './components/Home/Home';
import AuthProvider from './components/Hooks/AuthProvider';
import PrivateRoute from './components/Hooks/PrivateRoute';
import Login from './components/Login/Login';
import Mybooking from './components/Mybooking/Mybooking';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';

function App() {
  return (
    <div>
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
         <Home></Home>   
        </Route>
        <Route path='/home'>
         <Home></Home>   
        </Route>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <Route path='/addplan'>
          <Addplans></Addplans>
        </Route>
        <PrivateRoute path='/booking/:planId'>
          <Booking></Booking>
        </PrivateRoute>
        <PrivateRoute path='/mybookings'>
           <Mybooking></Mybooking>
        </PrivateRoute>
        <Route path='/manageorders'>
          
        </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
