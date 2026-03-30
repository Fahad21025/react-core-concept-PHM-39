
import './App.css'
import {useState} from 'react';
import Batsman from './Batsman';

function App() {
      
const [count, setCount] = useState(0);

const handleAdd = () => {
  const newCount = count+1;
  setCount(newCount);
}
   
  function handleClick(){
    alert("btn1 clicked");
  }
  const handleClicked2 = ()=>{
  alert("btn2 clicked");
}

const handleClicked3 = (num) => {
  alert("btn3 clicked with value: "  +(num + 10));
};

  return (
    <>
   <h1>React learning</h1>

   <button class="btn" onClick={handleClick}>btn1</button>
    <button class="btn" onClick={handleClicked2}>btn2</button>
        <button class="btn" onClick={() => handleClicked3(5)}>btn3</button>

        <div style={{border:'4px solid black',width:'200px',margin:'20px auto',padding:'10px',borderRadius:'10px'}}>
        <p>Count:{count}</p>
        <button class="btnCount" onClick={handleAdd}>Add</button>
        </div>
    <Batsman></Batsman>
    </>
  )
}

export default App
