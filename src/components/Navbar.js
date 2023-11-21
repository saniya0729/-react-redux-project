import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import cart from '../cart.png'
const Navbar=()=> {
const items = useSelector((state)=> state.cart)

  return (
    <div className="navbar" style={{ display: "flex", alignItems: "center" , justifyContent:'space-between'}}
    >
      <span className="logo">D-MART STYLES</span>
      <div>
        <Link className="navLink" to="/" >
          Home
        </Link>
        <Link className="navLink" to="/cart">
          <i class="fa-solid fa-cart-plus"></i>
        <img src={cart} alt="" style={{height:'30px',}}/>
        </Link>
        <span className="cartCount">Cart Items: {items.length} 
        </span>
      </div>
    </div>
  );
}
export default Navbar;