//import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../services/firebase/firestore.js'
import { useAsync } from '../../hooks/useAsync'



const ItemListContainer = (props) => {
        const { categoryId } = useParams()
        const { isLoading, data, error } = useAsync(() => getProducts(categoryId), [categoryId])
        if(isLoading) {
            return <h1>Cargando...</h1>
        }

        if(error) {
            return<h1>Hubo un error</h1>
        }

        return(
         <div>
            <h1>{props.greeting}</h1>
           { data.length > 0 
                ? <ItemList products={data}/>
                : <h1>sin Stock</h1>
            }
            </div>
    )
}
 export default ItemListContainer;