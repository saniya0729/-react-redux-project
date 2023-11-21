import React from 'react'
import Products from '../components/Products';
const Home=()=> {
  return (
    <div>  
        <h2 className='heading' style={{display:'flex' , justifyContent:'center', textAlign:'center'}}>Welcome To the D-MART Shopping App</h2>
        <section>
            <h3 style={{display:'flex', justifyContent:'center'}}>Products</h3>
            <Products />
        </section>
    </div>
  )
}
export default Home;



