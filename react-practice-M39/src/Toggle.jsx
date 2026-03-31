import {useState} from 'react';
export default function Toggle(){


    const [show, setShow] = useState(false);
    return(
        // <div>
        //     {
        //         show ?(
        //             <>
        //             <h1>This is visible</h1>
        //             <button class="btnCount" onClick = {() => setShow(false)}>Hide</button>
        //             </>
        //         ):(
        //             <>
        //             <button class="btnCount" onClick = {() => setShow(true)}>Show</button>
        //             </>
        //         )
        //     }
         //</div>


         <>
         <button class="btnCount" onClick = {()=> setShow(!show)}>
            {show ? 'Hide': 'Show'}
         </button>
         {show && <h1>This is visible</h1>}
         </>
    )
}