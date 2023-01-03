import { useState } from "react";

const ItemCount = ({onAdd,stock})=>{
    //let count = 0;

    //desestructuracion
    //primer elemento nombre de la variable, segundo elemento set+nombreVariable
    const [count,setCount] = useState(0);
    //console.log(count);

    
    const decrement = ()=>{
        // count--;
        // console.log(count);
        //EL -- MUTARIA LA VARIABLE POR ESO SE USA -1
        //setCount(count - 1);

        //En realidad se usa así
        setCount(prev => prev - 1);
    }
    const increment = ()=>{
        // count++;
        // console.log(count);
        //setCount(count + 1);


        //para solucionar lo de esperar al return
        // for (let i = 0; i < 5; i++) {
        //     setCount(previo => previo +1);
        // }
        setCount(prev => prev +1)
    }
    const reset = () =>{
        setCount(0);
        //console.log("en reset");
    }
    return (
        <div>
            <h1>Contador</h1>            
            <h2>{count}</h2>
            <button onClick={count > 0 ? decrement : reset}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={() => onAdd(count)}>Agregar</button>
        </div>
    )
}

export default ItemCount;