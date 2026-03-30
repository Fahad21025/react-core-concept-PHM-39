  import {useState} from 'react';

export default function Batsman(){
  const [runs, setRuns] = useState(0);

    return(
        <div>
            <h1>Batsman: virat kohli</h1>
            <p>age:35</p>
            <p>country:india</p>
            <p>runs: {runs}</p>
            <button  class="btnCount" onClick={() => setRuns(runs + 1)}> single runs</button>
            <button class="btnCount" onClick={() => setRuns(runs + 4)}>Add 4 runs</button>
            <button class="btnCount" onClick={() => setRuns(runs + 6)}>Add 6 runs</button>
        </div>
    )
}