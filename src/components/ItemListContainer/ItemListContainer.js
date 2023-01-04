import React, { useEffect, useState } from "react";
import { getProducts} from '../../asyncMock';
import ItemList from '../ItemList/ItemList'


const ItemListContainer = ({gretting}) =>{
    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(false);
    
    useEffect(() =>{
        setLoading(true);
        getProducts().then(prod => {
            setProducts(prod)
        }).catch(()=>{
            console.log('error');
        }).finally(()=>{
            setLoading(false);
        })
    },[])
    console.log(products);
    // const [title,setTitle] = useState("Titulo");

    // const [search, setSearch] = useState("celulares");
    
    // //el array vacio significa que solo se ejecuta despues de montar, lo que ponga adentro del parentesis, es lo que va a escuchar
    // useEffect(()=>{
    //     console.log("despues del render "+search);
    //     //esto va antes de actualizar los estados del search en este caso
    //     return () => console.log("limpieza");
    // },[search])

    //console.log("render");
    // const prodsComponentes = products.map(prod =>
    //         <li>{prod.name}</li> 
    //     )
    // console.log(prodsComponentes);
    if(loading){
        return <h1>Cargando...</h1>
    }
    return(
        <div>
            <h1>{gretting}</h1>
            <ItemList products={products}/>
            {/* <ul>
                {products.map(prod =><li>{prod.name}</li>)}
            </ul> */}
            {/* <button onClick={ ()=>setTitle('Otro Titulo') } >Cambiar Titulo</button>
            <button onClick={ ()=>setSearch('autos') } >Cambiar Search</button> */}
        </div>
    )
}

export default ItemListContainer;