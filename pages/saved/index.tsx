import React, { Fragment } from 'react';

//styles
import classes from './saved.module.css';

//components
import { Canva, Header, Item } from '../../components';

function index(props) {
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
                        <Item image='' title='Saved Item one' price={300} id={3} isDelete />
                        <Item image='' title='Saved Item one' price={300} id={3} isDelete />
                        <Item image='' title='Saved Item one' price={300} id={3} isDelete />
                        <Item image='' title='Saved Item one' price={300} id={3} isDelete />
                        <Item image='' title='Saved Item one' price={300} id={3} isDelete />
                        <Item image='' title='Saved Item one' price={300} id={3} isDelete />
                    </div>
                </section>
            </Canva>
        </Fragment>
    );
}

export default index;