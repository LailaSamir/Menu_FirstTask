import React, { Component } from 'react';

class Product extends Component {
    // state = { 
    //     itemName:this.props.product.name,
    //     count:this.props.product.count,
    //  }

     getClasses() {
         return  this.props.product.count === 0 ?'badge badge-warning m-2' :'badge badge-primary m-2' ;
     }

    render() { 
        return ( 
            <div className='row'>

                <div className='col-2'>
                     <span style={{color:'red',}}>{this.props.product.name}</span>
                </div>

                <div className='col'>
                    <span className={this.getClasses()}>{this.props.product.count}</span>
                    <button onClick={() => this.props.onIncreament(this.props.product)} className="btn btn-primary btn-sm">+</button>
                    <button onClick={() => this.props.onDecreament(this.props.product)} className="btn btn-primary btn-sm">-</button>
                    <span onClick={()=>this.props.onDelete(this.props.product)}>
                        <i className="fas fa-trash m-2"></i>
                    </span>
                </div>

            </div>
            
         );
    }
}
 
export default Product;
