const products = [
    {
        id:1,
        name:'iphone 12',
        price:1000,
        category: 'celular',
        img:'',
        stock:20,
        description: 'Descripcion 1'
    },
    {
        id:2,
        name:'iphone 13',
        price:1100,
        category: 'celular',
        img:'',
        stock:20,
        description: 'Descripcion 1'
    }
]

const getProducts = ()=>{
    return new Promise((res)=>{
        setTimeout(() => {
            res(products)
        }, 1500);
    })
}