import {useState} from 'react';

export default function Count(){
    const [count, setCount] = useState(0);
  
    return(

        <div>
            <h1>Count:{count}</h1>
            <button  class="btnCount" onClick = {()=> setCount(count+1)}>Add</button>
             <button  class="btnCount" onClick = {() => setCount(count>0 ? count-1 : 0)}>Sub</button>
              <button  class="btnCount" onClick = {() => setCount(0)}>Reset</button>
        </div>
    )
}