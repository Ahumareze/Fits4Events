import React, { Fragment } from 'react';

//styles
import classes from './Home.module.css';

//Components
import { Canva, Collection, Header } from '../../components';
import Intro from './components/Intro/Intro';

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
                            <Collection />
                            <Collection />
                            <Collection />
                            <Collection />
                        </div>
                    </div>
                </section>
            </Canva>
        </Fragment>
    );
}

export default Home;