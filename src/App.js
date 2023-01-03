import logo from './logo.svg';
import './App.css';
import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { useState } from 'react';

function App() {
  const [show,setShow] = useState(false);
  return (
    <div className="App">
      {/* como hago para montar y desmontar */}
      <button onClick={ ()=>setShow(!show) } >Show/hide</button>
      {show && <ItemListContainer gretting={"HOLA"}/> }
      {/* <ItemCount/> */}
      <ItemCount onAdd ={(count)=>console.log("se agregaron "+count)}/>
    </div>
  );
}

export default App;
