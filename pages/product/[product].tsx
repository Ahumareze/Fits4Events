import React, {FC, Fragment, useEffect, useState} from 'react';

//styles
import classes from './product.module.css';

//components
import {useRouter} from 'next/router';
import { Canva, Header } from '../../components';
import { SizeButtons, Button } from '../../components';
import { FiHeart, FiShoppingBag } from 'react-icons/fi';

//testdata
import data from '../../components/utilities/testData';

function Product(props) {
    const router = useRouter();
    
    //states
    const [productTitle, setProduceTitle] = useState<string>();
    const [product, setProduct] = useState<any>();
    const [price, setPrice] = useState<number>()

    const [mainImage, setMainImage] = useState<any>()
    const [size, setSize] = useState<string>();
    const [quantity, setQuantity] = useState<number>(1);

    useEffect(() => {
        if(!router.isReady) return;

        const route = router.query.product;
        assignValues(route);

    }, [router.isReady]);

    const assignValues = (route) => {
        const arr = route?.toString().split(' ');

        const productTitle = route.slice(0, route.length - 1);
        setProduceTitle(productTitle);
        
        const id = arr.slice(-1).pop()
        fetchData(id)
    };

    const fetchData = (id) => {
        const item = data[id];

        setProduct(item);
        setMainImage(item.images[0]);
        setPrice(item.price);

        if(!item.sizes) return;
        setSize(item.sizes[0])
    };

    const updateQuantity = (type: string) => {
        if(type === '+'){
            if(quantity > 4) return;
            setQuantity(prev => prev + 1)
        }else{
            if(quantity == 1) return;
            setQuantity(prev => prev - 1)
        }
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
                                {product?.images.map((i: string) => (
                                    <img src={i} onClick={() => setMainImage(i)} />
                                ))}
                            </div>
                            <div className={classes.largeImageContainer}>
                                <img src={mainImage} />
                            </div>
                        </div>
                        <div className={classes.detailsDiv}>
                            <p className={classes.title}>{product?.title}</p>
                            <p className={classes.price}>${price * quantity}</p>
                            <div className={classes.sizeContainer}>
                                {product?.sizes.map((i: string) => (
                                    <SizeButtons size={i} selected={size === i} select={(e) => setSize(e)} />
                                ))}
                            </div>
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
                                <Button text='Add To Bag'>
                                    <FiShoppingBag color='#fff' size={20} />
                                </Button>
                                <div className={classes.favButtonContainer}>
                                    <div className={classes.favButton}>
                                        <FiHeart color='#000' size={20} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Canva>
        </Fragment>
    );
}

export default Product;