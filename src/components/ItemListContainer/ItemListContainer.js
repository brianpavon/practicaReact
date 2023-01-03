import { useEffect, useState } from "react";


const ItemListContainer = ({gretting}) =>{
    const [title,setTitle] = useState("Titulo");

    const [search, setSearch] = useState("celulares");
    
    //el array vacio significa que solo se ejecuta despues de montar, lo que ponga adentro del parentesis, es lo que va a escuchar
    useEffect(()=>{
        console.log("despues del render "+search);
        //esto va antes de actualizar los estados del search en este caso
        return () => console.log("limpieza");
    },[search])

    console.log("render");
    return(
        <div>
            <h1>{gretting}</h1>
            <button onClick={ ()=>setTitle('Otro Titulo') } >Cambiar Titulo</button>
            <button onClick={ ()=>setSearch('autos') } >Cambiar Search</button>
        </div>
    )
}

export default ItemListContainer;