const ItemList = ({products}) =>{

    return(
      
        <ul>
            {products.map(prod =><li key={prod.id}>{prod.name}</li>)}
            //en realidad tendria que tener un componente mas que renderize cada item
        </ul>
        
    )
}

export default ItemList;