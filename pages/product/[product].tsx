import React, {FC, Fragment, useEffect, useState} from 'react';

//styles
import classes from './product.module.css';

//icons
import { FiHeart, FiShoppingBag } from 'react-icons/fi';

//components
import {useRouter} from 'next/router';
import { AddedToCart, Canva, Header, link, Notification } from '../../components';
import { SizeButtons, Button, currencyConverter } from '../../components';
import axios from 'axios';

export async function getServerSideProps(context) {

    //parsing route
    const route = await context.params.product;
    const arr = route?.toString().split(' ');
    const id = arr.slice(-1).pop();

    const res = await axios.post(link + '/get-single', {id}).then(r => {return r.data}).catch(e => {return null});
    const data = await res;

    return{
        props: {data}
    }
}

function Product({data}) {
    
    //states
    const [productTitle, setProduceTitle] = useState<string>();
    const [product, setProduct] = useState<any>(data);
    const [price, setPrice] = useState<number>(data.price)

    const [mainImage, setMainImage] = useState<any>(data.images[0])
    const [size, setSize] = useState<string>();
    const [quantity, setQuantity] = useState<number>(1);
    const [updateUi, setUpdateUi] = useState(0);

    //UI states
    const [isModal, setIsModal] = useState(false);
    const [alreadyExists, setAlreadyExists] = useState(false);


    const updateQuantity = (type: string) => {
        if(type === '+'){
            if(quantity > 4) return;
            setQuantity(prev => prev + 1)
        }else{
            if(quantity == 1) return;
            setQuantity(prev => prev - 1)
        }
    }

    const addToCart = async () => {
        //get localStorage data
        const cart = await localStorage.getItem('@Cart');
        const parsedCart = JSON.parse(cart);
        if(!cart){
            const item = {...product, quantity};
            const data = [item]
            localStorage.setItem('@Cart', JSON.stringify(data));
            setIsModal(true);
        }else{
            //check cart for existing item
            const isInArray = parsedCart.find(function(el){ return el._id === product._id }) !== undefined;
            if(!isInArray){
                const item = {...product, price: product.price * quantity,  quantity};
                const data = [...parsedCart, item];
                localStorage.setItem('@Cart', JSON.stringify(data));
                setIsModal(true);
            }else{
                setAlreadyExists(true)
            }
        }

        console.log(parsedCart)
    }

    return (
        <Fragment>
            <header>
                <title>{productTitle}</title>
            </header>
            <Canva>
                <Header active='' />
                <section className={classes.section}>
                    <div className={classes.main}>
                        <div className={classes.imagesContainer}>
                            <div className={classes.miniImagesContainer}>
                                {product?.images.map((i: string, idx: number) => (
                                    <img src={i} onClick={() => setMainImage(i)} key={idx} />
                                ))}
                            </div>
                            <div className={classes.largeImageContainer}>
                                <img src={mainImage} />
                            </div>
                        </div>
                        <div className={classes.detailsDiv}>
                            <p className={classes.title}>{product?.name}</p>
                            <p className={classes.price}>{currencyConverter(price * quantity)}</p>
                            {/* <div className={classes.sizeContainer}>
                                {product?.sizes.map((i: string) => (
                                    <SizeButtons size={i} selected={size === i} select={(e) => setSize(e)} />
                                ))}
                            </div> */}
                            <div className={classes.quantity}>
                                <div className={classes.addBox} onClick={() => updateQuantity('-')}>
                                    <p>-</p>
                                </div>
                                <div className={classes.NumberBox}>
                                    <p>{quantity}</p>
                                </div>
                                <div className={classes.addBox} onClick={() => updateQuantity('+')}>
                                    <p>+</p>
                                </div>
                            </div>
                            <div className={classes.bottom}>
                                <Button onClick={() => addToCart()} text='Add To Bag'>
                                    <FiShoppingBag color='#fff' size={20} />
                                </Button>
                                <div className={classes.favButtonContainer}>
                                    <div className={classes.favButton} onClick={() => addToCart()}>
                                        <FiHeart color='#000' size={20} />
                                    </div>
                                </div>
                            </div>
                            {alreadyExists && <Notification close={() => setAlreadyExists(false)} />}
                        </div>
                    </div>
                </section>
            </Canva>
            {isModal && <AddedToCart closeModal={() => setIsModal(false)} />}
        </Fragment>
    );
}

export default Product;