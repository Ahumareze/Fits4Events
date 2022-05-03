import React, { Fragment } from 'react';

//styles
import classes from './collections.module.css';

//components
import {useRouter} from 'next/router';
import { Canva, Header } from '../../components';
import SideBar from './components/sideBar/SideBar';
import Item from '../../components/item/Item';

//icons
import { FiSearch } from 'react-icons/fi';

//test data
import data from '../../components/utilities/testData';


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
                    <div className={classes.container}>
                        {data.map((i: any, idx: number) => (
                            <Item title={i.title} price={i.price} image={i.image} key={idx} />
                        ))}
                    </div>
                </section>
            </Canva>
        </Fragment>
    );
}

export default Collection;