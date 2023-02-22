import React from 'react'
import "./App.css"
import { useContext } from 'react'
import { Mycontext} from './Mycontext';
import Maintable from './Maintable';



function Worktable({value}) {
  const [name,setName,info,setInfo,change,setChange]=useContext(Mycontext)
  const cancel=(para)=>{
    const removeCity=name.filter(item=>item.n!==para)
  setName(removeCity)
}
const date = new Date();
  const showTime = date.getHours();
  const time=value.date_and_time;
  const timing=new Date(time).getHours()
  let timing2=showTime-timing
  console.log(timing2)

  return (
   
    <div>
          
               <table>
                <tr key={value.name} style={{backgroundColor:change===value.n?'yellow':'white'}} colSpan='6'>
                    <td className='tabledata' >{value.n}</td>
                    <td className='tabledata' ><h4>{value.description}</h4></td>
                    <td className='tabledata'>{value.temp_in_celsius}</td>
                    <td className='tabledata'>{value.pressure_in_hPa}</td>
                    <td className='tabledata'>{timing2} hrs</td>
                   
                    <td className='delete' onClick={()=>{cancel(value.n)}}><a href='/'>delete</a></td>
                </tr>
                </table>
              
          
      
    </div>
  )
}

export default Worktable
