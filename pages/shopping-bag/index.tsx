import React, { Fragment, useEffect, useState } from 'react';

//icons
import { FiCreditCard } from 'react-icons/fi';

//
import {useSelector} from 'react-redux';
import { Button, Canva, currencyConverter, EmptyPage, Header } from '../../components';
import Items from './components/Items/Items';

//styles
import classes from './shoppingBag.module.css';

function Index() {
    //state
    const [total, setTotal] = useState(0);
    const [deliveryFee, setDeliveryFee] = useState<any>(15);

    const [cart, setCart] = useState([]);
    const [removedItem, setRemovedItem] = useState();

    useEffect(() => {
        fetchCartData();
    }, []);

    //calculating the total price of items
    useEffect(() => {
        let num = 0;
        cart?.forEach(el => {
            num = el.price + num
        });
        setTotal(num)
    }, [cart])

    const fetchCartData = async () => {
        //fetch cart data from local storage
        const data = await localStorage.getItem('@Cart');
        if(data){
            const parsedCart = JSON.parse(data);
            setCart(parsedCart);
        }
    }

    //remove item from cart
    const removeItem = (position) => {
        setRemovedItem(position);
        
        //settimeout is for animation to render before running code
        setTimeout(() => {
            setRemovedItem(null);

            let arr = cart;
            arr.splice(position, 1);
            const newArr = [...arr];
            setCart(newArr);
            localStorage.setItem('@Cart', JSON.stringify(newArr))
        }, 1000)
        
    }

    return (
        <Fragment>
            <header>
                <title>Shopping Bag | Fits4Events</title>
            </header>
            <Canva>
                <Header active='cart' />
                <section className={classes.section}>
                    <div className={classes.main}>
                        <div className={classes.itemsContainer}>
                            <h3>My Bag</h3>
                            {cart.map((i,idx) => (
                                <Items data={{...i, idx: idx}} key={idx} onClick={() => removeItem(idx)} removedItem={removedItem}  />
                            ))}
                            {cart.length === 0 && <EmptyPage saved={false} />}
                        </div>
                        <div className={classes.totalContainer}>
                            <h3>Total</h3>
                            <div className={classes.totalDivs}>
                                <p className={classes.p1}>Sub-total</p>
                                <p className={classes.p2}>{currencyConverter(total)}</p>
                            </div>
                            <div className={classes.totalDivs}>
                                <p className={classes.p1}>Delivery-fee</p>
                                <p className={classes.p3}>{currencyConverter(deliveryFee)}</p>
                            </div>
                            <select onClick={(e) => setDeliveryFee((e.target as HTMLTextAreaElement).value)}>
                                <option value={15}>Standard delivery outside Nigeria</option>
                                <option value={35}>Fast delivery outside Nigeria</option>
                            </select>
                            <Button text='Proceed to Checkout' onClick={() => console.log('proceed to checkout')}>
                                <FiCreditCard color='#fff' size={20} />
                            </Button>
                        </div>
                    </div>
                </section>
            </Canva>
        </Fragment>
    );
}

export default Index;