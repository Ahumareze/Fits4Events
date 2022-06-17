import React, { FC, useEffect, useState } from 'react';

//styles
import classes from './Item.module.css';

//icons
import {FiHeart, FiShoppingBag, FiTrash} from 'react-icons/fi';

//components
import Link from 'next/link';
import currencyConverter from '../utilities/currencyConverter';

//assets
const saved = require('../../public/assets/heart.png');

interface ItemProps{
    image: string,
    title: string,
    price: number,
    data: any,
    id: any,
    isDelete: boolean,
    removeItem: () => void,
    addToCart: () => void,
}

const Item:FC<ItemProps> = ({data, image, title, price, id, isDelete, removeItem, addToCart}) => {
    //state
    const [isSaved, setIsSaved] = useState(false);

    //fetch saved items from localstorage
    useEffect(() => {
        const getSavedItems = localStorage.getItem('@Saved');
        if(getSavedItems){
            const savedItems = JSON.parse(getSavedItems);
            const isInArray = savedItems.find(function(el){ return el._id === id }) !== undefined;
            if(isInArray){
                setIsSaved(true)
            }
        }
    }, [id]);

    //add item saved items
    const saveItem = async() => {
        const localSavedItems = await localStorage.getItem('@Saved');
        setIsSaved(true)
        if(localSavedItems){
            const parsedData = JSON.parse(localSavedItems);
            const newData = [...parsedData, data];
            localStorage.setItem('@Saved', JSON.stringify(newData))
        }else{
            const newData = [data];
            localStorage.setItem('@Saved', JSON.stringify(newData))
        }
    }

    let button;
    if(!isDelete){
        button = (
            <div className={classes.favButton}>
                {!isSaved ? <FiHeart color='#000' size={20} onClick={() => saveItem()} /> : <img alt='hello' src={saved.default.src} />}
            </div>
        )
    }else{
        button = (
            <div className={classes.favButton} onClick={() => removeItem()}>
                <FiTrash color='#000' size={20} />
            </div>
        )
    };

    let bottom;
    if(isDelete){
        bottom = (
            <div className={classes.moveToBag} onClick={() => addToCart()}>
                <p>Add To Bag</p>
                <FiShoppingBag color='#fff' size={20} />
            </div>
        )
    }

    return (
        <div className={classes.item}>
            <div className={classes.image} style={{backgroundImage: `url(${image})`}}>
                <Link href={`/product/${title} ${id}`} passHref><div className={classes.itemLink}></div></Link>
                <div className={classes.favButtonContainer}>
                    {button}
                </div>
            </div>
            <div className={classes.titleDiv}>
                <p className={classes.title}>{title}</p>
            </div>
            <p className={classes.price}>{currencyConverter(price)}</p>
            {bottom}
        </div>
    );
}

export default Item;