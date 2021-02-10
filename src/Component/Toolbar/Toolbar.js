import React from 'react';
import classes from './Toolbar.module.css';
const toolbar = () => {
    return(
        <div className={classes.Toolbar}>
            <ul className={classes.nav}>
                <li><a href="#">CHECKOUT</a></li>
                <li><a href="#">ORDER</a></li>
            </ul>
        </div>
    )
}

export default toolbar;