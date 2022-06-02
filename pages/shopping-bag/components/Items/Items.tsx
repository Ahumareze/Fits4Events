import React from 'react';
import { FiX } from 'react-icons/fi';

//styles
import classes from './Items.module.css';

function Items({data, onClick, removedItem}) {
    
    return (
        <div className={`${data.idx !== removedItem ? classes.container : classes.slideOut}`}>
            <div style={{backgroundImage: `url(${data.images[0]})`}} className={classes.img} />
            <div className={classes.main}>
                <p className={classes.title}>{data.name}</p>
                <p className={classes.title}>Size: M</p>
                <p className={classes.title}>Quantity: {data.quantity}</p>
                <p className={classes.price}>${data.price}</p>
            </div>
            <div className={classes.cancleContainer}>
                <div className={classes.cancleButton} onClick={() => onClick()}>
                    <FiX color='#fff' />
                </div>
            </div>
        </div>
    );
}

export default Items;