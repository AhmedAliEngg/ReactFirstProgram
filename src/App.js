import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// import Profile from './MyFirstProgram';
// import YourCast from './ListItem';
// import RespondingEvent from './RespondingEvent';
import MyButton from './UpdatingEvent';
function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="App">
     <h1>Welcome to my first Program</h1>
     {/* <Profile/> */}
     {/* <YourCast/> */}
     {/* <RespondingEvent/> */}
     <MyButton  count={count} onClick={handleClick} />
    </div>
  );
}

export default App;
