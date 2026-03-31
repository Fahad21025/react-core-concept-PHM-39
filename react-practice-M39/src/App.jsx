
import './App.css'
import { Suspense, useState } from 'react';
import Batsman from './Batsman';
import Users from './Users';
import Friends from './Friends';
import Posts from './Posts';
import Count from './Count';



const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())

const fetchFriends = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}

const fetchPosts = async () =>{
   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
   
}


function App(){

  const friendsPromise =  fetchFriends();
const postsPromise = fetchPosts();
const [count, setCount] = useState(0);

const handleAdd = () => {
  const newCount = count + 1;
  setCount(newCount);
}

function handleClick() {
  alert("btn1 clicked");
}
const handleClicked2 = () => {
  alert("btn2 clicked");
}

const handleClicked3 = (num) => {
  alert("btn3 clicked with value: " + (num + 10));
};

return (
  <>
    <h1>React learning</h1>

    <button class="btn" onClick={handleClick}>btn1</button>
    <button class="btn" onClick={handleClicked2}>btn2</button>
    <button class="btn" onClick={() => handleClicked3(5)}>btn3</button>

    <div style={{ border: '4px solid black', width: '200px', margin: '20px auto', padding: '10px', borderRadius: '10px' }}>
      <p>Count:{count}</p>
      <button class="btnCount" onClick={handleAdd}>Add</button>
    </div>
    <Batsman></Batsman>
    <Suspense fallback={<h1>Loading...</h1>}>
      <Users fetchUsers={fetchUsers}></Users>
    </Suspense>

    <Suspense fallback={<h1>Loading...</h1>}>
      <Friends friendsPromise={friendsPromise}></Friends>
    </Suspense>

<Suspense  fallback = {<h1>posts loading...</h1>}>
<Posts postsPromise={postsPromise}></Posts>
</Suspense>

<Count></Count>
  </>
)
}

export default App
