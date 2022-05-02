import React, { Fragment } from 'react';

//styles
import classes from './collections.module.css';

//components
import {useRouter} from 'next/router';
import { Canva, Header } from '../../components';
import { FiSearch } from 'react-icons/fi';
import SideBar from './components/sideBar/SideBar';

function Collection(props) {
    const router = useRouter();
    const collection = router.query.collection;

    return (
        <Fragment>
            <header>
                <title>{collection}</title>
            </header>
            <Canva>
                <Header active='collections' />
                <section className={classes.section}>
                    <SideBar collection={collection} />
                    <div className={classes.container} />
                </section>
            </Canva>
        </Fragment>
    );
}

export default Collection;