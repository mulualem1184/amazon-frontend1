
import Header from './Componenets/Header/Header';
import './App.css';
import Landing from './Pages/Landing/Landing.jsx'
import Routing from './Routing.jsx'
import {useEffect, useContext} from 'react'
import {Type} from './utilities/actiontype.js'
import {DataContext} from './Componenets/DataProvider/DataProvider.jsx'
import {auth} from'./utilities/firebase.js'


function App() {
  const [{user}, dispatch] =useContext(DataContext)
  useEffect(()=>{
  auth.onAuthStateChanged((authUser)=>
  {
    if(authUser)
    {
      dispatch({type:Type.SET_USER,
        user:authUser

      });
    }else{
      dispatch({type:Type.SET_USER,
        user:null

      });
    }
  });
  },[])
  return (
    <>
    {/* <Header />
    <Landing /> */}
    <Routing />
    
    </>
  );
}

export default App;
