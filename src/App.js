import React from 'react';
// import logo from './logo.svg';
import './App.css';
import  Hello  from './Hello';
import  Other  from './other';
function App({name, age}) {
  return <div><strong>hello form app.js world{name}  {age + 70} 
  <br/>
      <Hello firstname={name}></Hello>
<br/>
      <Other></Other>
      </strong>
  </div>
}


export default App;