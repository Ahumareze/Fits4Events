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

    const [mainImage, setMainImage] = useState<any>()
    const [size, setSize] = useState<string>();

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
        setMainImage(item.images[0])
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
                                { product?.images.map((i: string) => (
                                    <img src={i} onClick={() => setMainImage(i)} />
                                )) }
                            </div>
                            <div className={classes.largeImageContainer}>
                                <img src={mainImage} />
                            </div>
                        </div>
                        <div className={classes.detailsDiv}>
                            <p className={classes.title}>{product?.title}</p>
                            <p className={classes.price}>${product?.price}</p>
                            <div className={classes.sizeContainer}>
                                {/* <SizeButtons size='s' selected={size === 's'} select={(e) => setSize(e)} />
                                <SizeButtons size='m' selected={size === 'm'} select={(e) => setSize(e)}/>
                                <SizeButtons size='l' selected={size === 'l'} select={(e) => setSize(e)}/>
                                <SizeButtons size='xl' selected={size === 'xl'} select={(e) => setSize(e)}/> */}
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