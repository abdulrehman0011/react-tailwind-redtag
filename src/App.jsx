 
import './App.css';
import './assets/css/style.css';
import { useEffect } from 'react';
 
 import { Link } from "react-router-dom";
function App() {


  useEffect(() => {
    const importTE = async () => {
      await import("tw-elements");
    };
    importTE();
  }, []);
  return (
     <> 
   <Link to='/' >Home </Link>
   <Link to='/SignUp' >SignUp </Link>
   <Link to='/Hero' >Hero </Link>
   <Link to='/MyAccount' >Hero </Link>
     </>
  );
}

export default App;
