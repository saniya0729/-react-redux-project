import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {remove} from '../store/cartSlice'
const Cart = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.cart);

  const handleRemove = (productId) => {
    dispatch(remove(productId))
  };
  return (
    <div>
      <h3 style={{display:'flex', justifyContent:'center' , color:'green'}}>Added Products In Cart</h3>

      <div className="cartWrapper" style={{display:'flex' , alignItems:'center' , justifyContent:'center'}}>
        {products.map((product) => (
          <div className="cartCard" style={{border:'1px solid grey', borderRadius:'6px' , width:'300px', margin:'20px'}}>
            <img src={product.image} alt="" style={{height:'280px', display:'flex', justifyContent:'center', margin:'auto'}}/>
            <h5 style={{display:'flex', justifyContent:'center'}} >{product.title}</h5>
            <h5 style={{display:'flex', justifyContent:'center'}} >product.price</h5>
            <button className="btn" onClick={() => handleRemove(product.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
