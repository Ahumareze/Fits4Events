import React, { FC } from 'react';

//styles
import classes from './Item.module.css';

interface ItemProps{
    image: string,
    title: string,
    price: number
}

const Item:FC<ItemProps> = ({image, title, price}) => {
    return (
        <div className={classes.item}>
            <div className={classes.image} style={{backgroundImage: `url(${image})`}} />
            <p className={classes.title}>{title}</p>
            <p className={classes.price}>${price}</p>
        </div>
    );
}

export default Item;