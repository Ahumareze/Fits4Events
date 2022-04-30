import React, { Fragment } from 'react';

//styles
import classes from './Home.module.css';

//Components
import { Canva, Collection, Header } from '../../components';
import Intro from './components/Intro/Intro';

//images
const shirts = require('../../public/assets/shirts.jpg');
const shoes = require('../../public/assets/sneakers.jpg');
const scarves = require('../../public/assets/scarves.jpg');
const jeans = require('../../public/assets/jeans.jpg');


function Home(props) {
    return (
        <Fragment>
            <header>
                <title>Fits4Events</title>
            </header>
            <Canva>
                <Header />
                <section className={classes.section}>
                    <Intro />
                    <div className={classes.collections}>
                        <h2>Collections</h2>
                        <div className={classes.collectionsContainer}>
                            <Collection title='Shirts' link='collection/shirts' image={shirts.default.src} />
                            <Collection title='Sneakers' link='collection/shoes' image={shoes.default.src} />
                            <Collection title='Jeans' link='collection/glasses' image={jeans.default.src} />
                            <Collection title='Sneakers' link='collection/shirts' image={scarves.default.src} />
                        </div>
                    </div>
                    <div className={classes.quickFits}></div>
                </section>
            </Canva>
        </Fragment>
    );
}

export default Home;