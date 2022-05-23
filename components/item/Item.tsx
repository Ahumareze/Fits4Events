import React, { FC } from 'react';

//styles
import classes from './Item.module.css';

//icons
import {FiHeart, FiShoppingBag, FiTrash} from 'react-icons/fi';
import Link from 'next/link';

interface ItemProps{
    image: string,
    title: string,
    price: number,
    id: any,
    isDelete: boolean
}

const Item:FC<ItemProps> = ({image, title, price, id, isDelete}) => {

    let button;
    if(!isDelete){
        button = (
            <div className={classes.favButton}>
                <FiHeart color='#000' size={20} />
            </div>
        )
    }else{
        button = (
            <div className={classes.favButton}>
                <FiTrash color='#000' size={20} />
            </div>
        )
    };

    let bottom;
    if(isDelete){
        bottom = (
            <div className={classes.moveToBag}>
                <p>Add To Bag</p>
                <FiShoppingBag color='#fff' size={20} />
            </div>
        )
    }

    return (
        <div className={classes.item}>
            <div className={classes.image} style={{backgroundImage: `url(${image})`}}>
                <Link href={`/product/${title} ${id}`}><div className={classes.itemLink}></div></Link>
                <div className={classes.favButtonContainer}>
                    {button}
                </div>
            </div>
            <div className={classes.titleDiv}>
                <p className={classes.title}>{title}</p>
            </div>
            <p className={classes.price}>${price}</p>
            {bottom}
        </div>
    );
}

export default Item;