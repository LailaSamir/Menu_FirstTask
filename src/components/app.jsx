import React, { Component } from 'react';
import NavBar from './navbar';
import ShopingCart from './shoppingCart';
import { Route, Switch, link } from 'react-router-dom';
import Home from './home';
import About from './about';
import Contact from './contact';


class App extends Component {
    state = { 
        products : [
            {id:1 , name:'Burger' , count: 3},
            {id:2 , name:'Fries' , count: 0},
            {id:3 , name:'Cola' , count: 2}
        ]
     }

     HandleDelete = (product) => {
       const products = this.state.products.filter( (p) => p.id !== product.id);
       this.setState ({products})
     }

     HandleReset = () => {
         //clone
         let products = [...this.state.products];
         //Edit
         products = products.map( p => {
             p.count = 0;
             return p;   
            });

         //SetState
         this.setState({products});
         
     }

     Increament = Product => {
        const products = [...this.state.products];
        const index = products.indexOf(Product);
        products[index] = {...products[index]}

        //edit
        products[index].count++ ;

        //setState
        this.setState({ products})
       };

    Decreament = Product => {
        //clone
        const products = [...this.state.products];
        const index = products.indexOf(Product);
        //deepClone
        products[index] = {...products[index]}

        //edit
        products[index].count-- ;

        //setState
        this.setState({ products})
       };


    render() { 
        return ( 
            <React.Fragment>

                

                <main className="container">
                 {/* <NavBar productsCount = {this.state.products.filter((p)=>p.count>0).length}/>
                        <Switch>
                            <Route path='/about' component={About} />
                            <Route path='/contact' component={Contact} />
                            <Route path='/' component={Home} />
                        </Switch> */}
                          <ShopingCart products={this.state.products}
                        onDelete={this.HandleDelete}
                        onReset={this.HandleReset}
                        onIncreament={this.Increament}
                        onDecreament={this.Decreament} />

                </main>
            </React.Fragment>
         );
    }
}
 
export default App;