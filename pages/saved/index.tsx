import React, { Fragment, useEffect, useState } from 'react';

//styles
import classes from './saved.module.css';

//components
import { Canva, EmptyPage, Header, Item, Notification } from '../../components';

function index(props) {
    //state
    const [saved, setSaved] = useState([]);
    const [removedItem, setRemovedItem] = useState();

    //UI states
    const [alreadyExistsItem, setAlreadyExistsItem] = useState(null);

    //fetch cart data from local storage
    useEffect(() => {
        const data = localStorage.getItem('@Saved');
        if(data){
            const parsedCart = JSON.parse(data);
            setSaved(parsedCart);
        }
    }, []);

    //remove item from cart
    const removeItem = (position) => {
        setRemovedItem(position);

        //settimeout is for animation to render before running code
        setTimeout(() => {
            setRemovedItem(null);

            let arr = saved;
            arr.splice(position, 1);
            const newArr = [...arr];
            setSaved(newArr);
            localStorage.setItem('@Saved', JSON.stringify(newArr))
        }, 1000)
    };

    //add item to cart from saved items
    const addToCart = async (position) => {
        //get localStorage data
        const cart = await localStorage.getItem('@Cart');
        const parsedCart = JSON.parse(cart);

        //preventing users from adding a saved item to cart whilst already added
        const isInArray = parsedCart.find(function(el){ return el._id === saved[position]._id }) !== undefined;
        if(!isInArray){
            setRemovedItem(position);

            //settimeout is for animation to render before running code
            setTimeout(() => {
                setRemovedItem(null);
                pushItemToCart(saved[position])
                let arr = saved;
                arr.splice(position, 1);
                const newArr = [...arr];
                setSaved(newArr);
                localStorage.setItem('@Saved', JSON.stringify(newArr));
            }, 1000)
        }else{
            setAlreadyExistsItem(position)
        }
    };

    const pushItemToCart = async (item) => {
        const data = await localStorage.getItem('@Cart');
        if(data){
            const parsedCart = JSON.parse(data);
            const newCart = [...parsedCart, item];
            localStorage.setItem('@Cart', JSON.stringify(newCart));
        }else{
            localStorage.setItem('@Cart', JSON.stringify([item]))
        }
    }

    return (
        <Fragment>
            <header>
                <title>Saved Items | Fits4Events</title>
            </header>
            <Canva>
                <Header active='saved' />
                <section className={classes.section}>
                    <h3>Saved Items</h3>
                    <div className={classes.container}>
                        {saved.map((i, idx) => (
                            <div className={`${idx !== removedItem ? classes.mainContainer : classes.slideOut }`}>
                                <Item 
                                    data={i} 
                                    image={i.images[0]} 
                                    title={i.name} 
                                    price={i.price} 
                                    id={i._id} 
                                    key={idx} 
                                    isDelete 
                                    removeItem={() => removeItem(idx)}
                                    addToCart={() => addToCart(idx) }
                                />
                                {alreadyExistsItem === idx && <Notification close={() => setAlreadyExistsItem(null)} />}
                            </div>
                        ))}
                        {saved.length === 0 && <EmptyPage saved />}
                    </div>
                </section>
            </Canva>
        </Fragment>
    );
}

export default index;