import '../product/Product.css';

function Product({
    product,
    onIncrement,
    onDecrement,
    onDelete
}){
return (
    <section className='product' >
        <div className='badge'>
        <span className='count'>{product.count||"zero"}</span>
        </div>
        <img src={product.imgUrl} alt={product.imgUrl} className='product-img'></img>
        <button className='btn btn-danger'onClick={()=>onDecrement(product.id)}>-</button>
        <button className='btn btn-success'onClick={()=>onIncrement(product.id)}>+</button>
        <button className='btn btn-danger' onClick={()=>onDelete(product.id)}>Delete</button>
    </section>
);

}
export default Product;