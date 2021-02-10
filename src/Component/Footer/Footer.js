import React from 'react';
import classes from './Footer.module.css';

const footer=()=>{
    return(
        <div className={classes.footer}>

            <ul className={classes.nav}>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Home</a></li>
            </ul>
        </div>
    )
}

export default footer;