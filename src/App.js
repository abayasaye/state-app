// import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Home from './Home';
import User from './User-class';


function App(){
  return(
    <div>
      <Counter num={0}/>
      
      <User/>
      <Home/>
    </div>
  )
}
export default App













// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
