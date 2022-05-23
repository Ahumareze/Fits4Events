import React from 'react';
import { FiX } from 'react-icons/fi';

//styles
import classes from './Items.module.css';

function Items() {
    return (
        <div className={classes.container}>
            <div style={{backgroundImage: `url(${'https://res.cloudinary.com/ahumareze/image/upload/v1652072005/15_ua4jo3.jpg'})`}} className={classes.img} />
            <div className={classes.main}>
                <p className={classes.title}>Nike AirForce one RedRanger</p>
                <p className={classes.title}>Size: M</p>
                <p className={classes.title}>Quantity: 1</p>
                <p className={classes.price}>${50}</p>
            </div>
            <div className={classes.cancleContainer}>
                <div className={classes.cancleButton}>
                    <FiX color='#fff' />
                </div>
            </div>
        </div>
    );
}

export default Items;