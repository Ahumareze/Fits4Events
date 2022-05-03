import React, { Fragment } from 'react';

//styles
import classes from './Collection.module.css';

//components
import { Canva, Collection, Header } from '../../components';

//utilities
import {collections} from '../../components';


function Collections() {
    return (
        <Fragment>
            <header>
                <title>Collections</title>
            </header>
            <Canva>
                <Header active='collections' />
                <section className={classes.section}>
                    <div className={classes.collections}>
                        <h2>Collections</h2>
                        <div className={classes.collectionsContainer}>
                            {collections.map((i: any, idx: number) => (
                                <Collection title={i.title} link={i.link} image={i.img} collectionPage />
                            ))}
                        </div>
                    </div>
                </section>
            </Canva>
        </Fragment>
    );
}

export default Collections;