
import './App.css';
import Nav from './Nav';
import Tables from './Tables';
// import Mycontext from  './Mycontext'
import { Mycontext } from './Mycontext';
import { useState } from 'react';

function App() {
  const [name,setName]=useState([])
  const [info,setInfo] =useState(['London','New York','Los Angeles','Las Vegas'])
  return (
  <div>
    <Mycontext.Provider value={[name,setName,info,setInfo]}>
     <Nav />
   
   <Tables />
   </Mycontext.Provider>
  </div>
  );
}

export default App;
