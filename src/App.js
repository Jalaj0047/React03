import React,{ Component } from 'react';
import classes from './App.module.css';
import Footer from '../src/Component/Footer/Footer';
import Toolbar from '../src/Component/Toolbar/Toolbar';
import ProductList from '../src/Container/ProductList';

class App extends Component {
  render(){
    return (
      <div className={classes.App}>
        <Toolbar/>
        <ProductList/>
        <Footer/>
      </div>
    );
  }
}

export default App;
