import React,{ Component } from 'react';
import Product from '../Component/Product/Product';
import classes from './ProductList.module.css'
class ProductList extends Component{
    state={
        products:[
            {pName:'CAR',pPrice:40.00},
            {pName:'BIKE',pPrice:30.00},
            {pName:'CYCLE',pPrice:20.00},
            {pName:'PHONE',pPrice:10.00},
        ]
    }
    render(){
        return(
            <div className={classes.productList}>
                <div className={classes.item1}>
                <Product productName={this.state.products[0].pName} productPrice={this.state.products[0].pPrice}/>
                </div>
                <div className={classes.item2}>
                <Product productName={this.state.products[1].pName} productPrice={this.state.products[1].pPrice}/>
                </div>
                <div className={classes.item3}>
                <Product productName={this.state.products[2].pName} productPrice={this.state.products[2].pPrice}/>
                </div>
                <div className={classes.item4}>
                <Product productName={this.state.products[3].pName} productPrice={this.state.products[3].pPrice}/>
                </div>
            </div>
        )
    }
}

export default ProductList;