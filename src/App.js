import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>
    </div>
  );
}
 
function ExternalUsers () {
  const [users, setUsers] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  },[])
  return(
    <div>
       {
        users.map(user => <Users name ={user.name} email = {user.email}></Users>)
       }
    </div>
  )
}

function Users ({name, email}) {
  return(
    <div style={{border:'3px solid blue', margin:'30px', background:'pink'}}>
      <h1>Name: {name}</h1>
      <h3>Email: {email}</h3>
    </div>
  )
}


function Counter () {
  const [count, setCount] = useState(50);
  const increaseCount = () =>{
     const newCount = count + 1;
     setCount(newCount);
  }

  const decreaseCount = () =>{
    const newCount = count -1;
    setCount(newCount);
  }
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

export default App;
