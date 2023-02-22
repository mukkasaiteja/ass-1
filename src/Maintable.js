import React, { useRef, useState } from 'react'
import Worktable from './Worktable'
import { useContext } from 'react'
import { Mycontext} from './Mycontext';
import "./App.css"


function Maintable() {
  const [change,setChange]=useState("")
    const [name,setName,info,setInfo]=useContext(Mycontext)
    const input=useRef()
    const nothing=()=>{
      setChange(input.current.value)
      input.current.value=""
      setTimeout(() => {
        setChange('')
      }, 3000);

    }
  return (
    <div className='maintable'>
      <div className='input'>
        <input ref={input} type="text" placeholder='city Name' /><button onClick={nothing}>Search</button>
      </div>
      <table className=''>
        
                <tr>
                    <th className='tabledata'>City</th>
                    <th className='tabledata'>Description</th>
                    <th className='tabledata'>temperature (<span>&deg;c</span>)</th>
                    <th className='tabledata'>pressure(hpa)</th>
                    <th className='tabledata'>Data age (hrs)</th>
                    <th className='tabledata'></th>
                </tr>
              
          
              
             </table>
             {name.length===0?(<tr colSpan='6'id=''><td ><h1 >No Data</h1></td></tr>):(
          <div>
          {name.map((e,i)=>{
            return (
              <Worktable value={e} key={e.name} />
            )
          })}
          </div>
        )}
        

    </div>
  )
}

export default Maintable
