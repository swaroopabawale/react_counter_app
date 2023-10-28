import Product from "../../components/product/Product";
import TotalCounter from "../../components/total-counter/TotalCounter";
import { useState } from "react";

function Products(){

    const [products,setProducts]=useState(
        [ {
            id: 1,
            count: 0,
            name: "car",
            imgUrl:
              "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            id: 2,
            count: 0,
            name: "bicycle",
            imgUrl:
              "https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            id: 3,
            count: 0,
            name: "phone",
            imgUrl:
              "https://images.unsplash.com/photo-1505156868547-9b49f4df4e04?auto=format&fit=crop&q=80&w=1916&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
        ]
    );


    const handleIncrement = (id)=>{
        const newProducts = [...products];

        const index = newProducts.findIndex((product) => product.id === id);
        const product = { ...newProducts[index] };
        product.count = product.count + 1;
        newProducts[index] = product;
    
        setProducts(newProducts);
    }

    const handleDecrement = (id)=>{
      const newproduct=[...products];

      const index=newproduct.findIndex((product)=>product.id==id);
      const product={...newproduct[index]};
      if(product.count){
      product.count=product.count-1;
      newproduct[index]=product;

      setProducts(newproduct);
      }

    }

    const handleDelete = (id)=>{
        const newproducts=products.filter((product)=>product.id !== id);
        setProducts(newproducts);
    }

    const totalcount=products.reduce((acc,product)=>{
        acc=acc+product.count;
        return acc;
    },0);

    return(
       <>
        <TotalCounter count={totalcount}/>
        {
            products.map((product)=>{
                return <Product 
                key={product.id}
                product={ product}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                onDelete={handleDelete}
                />
            })
        }

        </>
    );

}

export default Products;