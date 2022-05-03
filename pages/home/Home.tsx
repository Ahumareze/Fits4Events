import React, { Fragment } from 'react';

//styles
import classes from './Home.module.css';

//Components
import { Canva, Collection, collections, Header } from '../../components';
import Intro from './components/Intro/Intro';

//images
const img1 = require('../../public/assets/img1.jpg');
const img2 = require('../../public/assets/img2.jpg');
const img3 = require('../../public/assets/img3.jpg');
const img4 = require('../../public/assets/img4.jpg');


function Home(props) {
    return (
        <Fragment>
            <header>
                <title>Fits4Events</title>
            </header>
            <Canva>
                <Header active='' />
                <section className={classes.section}>
                    <Intro />
                    <div className={classes.collections}>
                        <h2>Collections</h2>
                        <div className={classes.collectionsContainer}>
                            {collections.slice(0,4).map((i: any, idx: number) => (
                                <Collection title={i.title} link={i.link} image={i.img} collectionPage={false} />
                            ))}
                        </div>
                    </div>
                    <div className={classes.quickFits}></div>
                </section>
            </Canva>
        </Fragment>
    );
}

export default Home;