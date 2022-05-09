import React, { Fragment } from 'react';
import { Canva, Header } from '../../components';

//styles
import classes from './ShoppingBag.module.css';

function index(props) {
    return (
        <Fragment>
            <header>
                <title>Fits4Events | Shopping Bag</title>
            </header>
            <Canva>
                <Header active='cart' />
            </Canva>
        </Fragment>
    );
}

export default index;