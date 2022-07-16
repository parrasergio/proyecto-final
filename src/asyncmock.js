const products = [
    { 
        id: '1', 
        name: 'Samsungs', 
        price: 43000, 
        category: 'Monitores 24" ', 
        img:'../images/monitores.jpg', 
        stock: 41, 
        description:'calidad 60 hz'
    },
    {  
         id: '2',
        name: 'iQual', 
        price: 9000, 
        category: 'gabinetes', 
        img:'../images/gabinete.jpg', 
        stock: 5, 
        description:'GABINETE GAMER IQUAL CM-2801 CON VIDRIO TEMPLADO Y FUENTE DE 700W'
    },
    {   
        id: '3', 
        name: 'Sharkoon Cooler',
        price: 9500, 
        category: 'coolers', 
        img:'../images/coolers.jpg', 
        stock: 15, 
        description:'Sharkoon Shark Blades Rgb Fan 120Mm Black'
    },
]


export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}