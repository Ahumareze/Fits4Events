import React, { FC } from 'react';

//styles
import classes from './Item.module.css';

//icons
import {FiHeart} from 'react-icons/fi';
import Link from 'next/link';

interface ItemProps{
    image: string,
    title: string,
    price: number,
    id: any
}

const Item:FC<ItemProps> = ({image, title, price, id}) => {
    console.log(id)
    return (
        <div className={classes.item}>
            <div className={classes.image} style={{backgroundImage: `url(${image})`}}>
                <Link href={`/product/${title} ${id}`}><div className={classes.itemLink}></div></Link>
                <div className={classes.favButtonContainer}>
                    <div className={classes.favButton}>
                        <FiHeart color='#000' size={20} />
                    </div>
                </div>
            </div>
            <div className={classes.titleDiv}>
                <p className={classes.title}>{title}</p>
            </div>
            <p className={classes.price}>${price}</p>
        </div>
    );
}

export default Item;