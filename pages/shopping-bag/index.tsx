import React, { Fragment, useState } from 'react';
import { FiCreditCard } from 'react-icons/fi';
import { Button, Canva, Header } from '../../components';

//styles
import classes from './shoppingBag.module.css';

function index(props) {
    const [deliveryFee, setDeliveryFee] = useState();

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
                        </div>
                        <div className={classes.totalContainer}>
                            <h3>Total</h3>
                            <div className={classes.totalDivs}>
                                <p className={classes.p1}>Sub-total</p>
                                <p className={classes.p2}>$400</p>
                            </div>
                            <div className={classes.totalDivs}>
                                <p className={classes.p1}>Delivery-fee</p>
                                <p className={classes.p3}>${deliveryFee}</p>
                            </div>
                            <select onClick={(e) => setDeliveryFee(e.target.value)}>
                                <option value={15}>Standard delivery outside Nigeria</option>
                                <option value={35}>Fast delivery outside Nigeria</option>
                            </select>
                            <Button text='Proceed to Checkout'>
                                <FiCreditCard color='#fff' size={20} />
                            </Button>
                        </div>
                    </div>
                </section>
            </Canva>
        </Fragment>
    );
}

export default index;