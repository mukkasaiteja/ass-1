import React from 'react'
import "./App.css"
import { useContext } from 'react'
import { Mycontext} from './Mycontext';
import Worktable from './Worktable';
import Maintable from './Maintable';



export default function Tables() {
    const [name,setName,info,setInfo]=useContext(Mycontext)
    const type =()=>{
        if (info.length!==0) {
            const find=info[0]
            fetch(`https://python3-dot-parul-arena-2.appspot.com/test?cityname=${find}`).then((res)=>res.json()).then(data=>{
                const details=info.filter((ele,index) =>index !==0)
                setInfo(details)
                setName([...name,{n:find,...data}])
                
            })
            console.log(name);
            
        }
    }
  return (
    <div className='main'>
        <div  className="details">
        <button onClick={type}>Get Weather</button>
        <table border="1px">
           
            <tr>
                <th>City</th>
            </tr>
            <tr>
                <td>
                  London
                </td>
            </tr>
            <tr>
                <td>
                    New york
                </td>
            </tr>
            <tr>
                <td>
                    Los Angeles
                </td>
            </tr>
            <tr>
                <td>
                    Las vegas
                </td>
            </tr>
         
        </table>
    </div>
    <div>
        <Maintable/>
    </div>
    
      
    </div>
  )
}
