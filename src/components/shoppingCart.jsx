import React, { Component } from 'react';
import Product from './Product';

class ShopingCart extends Component {

   constructor (props) {
       super (props);
       console.log(' ShoppingCart ==> Constructor ');
   }
       
   componentDidMount() {
       //Call Back End
       console.log(' ShoppingCart ==> ComponentDidMount ');
   }

   componentDidUpdate(prevProps,prevState) {
    //Call Back End
    console.log(' ShoppingCart ==> ComponentDidUpdate ');
    
}

componentWillUnmount() {
    console.log(' ShoppingCart ==> componentWillUnMount ');
}

    render() { 
        console.log('ShoppingCart ==> Render')
        return ( 
            <React.Fragment>
                <h3>Shopping Cart</h3>
                
                {
                    this.props.products.map (product => 
                    < Product key={product.id}
                     product={product}
                     onDelete={this.props.onDelete} 
                     onIncreament={this.props.onIncreament}
                     onDecreament={this.props.onDecreament}
                     />)
                }
                <button onClick={this.props.onReset} className='btn btn-secondary btn-sm m-2'>
                    Reset
                </button>
            </React.Fragment>
         
        );
    }
}
 
export default ShopingCart;