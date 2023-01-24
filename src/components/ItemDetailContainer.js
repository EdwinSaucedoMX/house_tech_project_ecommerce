import Item from './Item';
import Counter from './Counter'

const ItemDetailContainer = () =>{
     
    /*useEffect(() => {
        fetch(`https://api.mercadolibre.com/sites/MLM//items?id=$${id}}`)
        .then(response => response.json())
        .then(data => {
            setProducts(data.results)});
            setLoading(false);
        }, [])
            
    /items?ids=$ITEM_ID1
    */
    return(
        <div className='container-flex-center'>
            <Item />
            <Counter />
        </div>
    )
}

export default ItemDetailContainer;