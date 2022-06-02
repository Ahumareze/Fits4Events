import React, { Fragment, useEffect, useRef } from 'react';

//styles
import classes from './collections.module.css';

//components
import { Canva, collections, Header, link } from '../../components';
import SideBar from './components/sideBar/SideBar';
import Item from '../../components/item/Item';
import axios from 'axios';

export async function getServerSideProps(context) {

    const route = await context.params.collection;
    const res = await axios.post(link + '/get-item', {section: route}).then(r => {return r.data}).catch(e => {return null});

    const data = await res;
    
    return{
        props: {data, route}
    };

}


function Collection({data, route}) {
    return (
        <Fragment>
            <header>
                <title>Fits4Event</title>
            </header>
            <Canva>
                <Header active='collections' />
                <section className={classes.section}>
                    <SideBar collection={route} />
                    <div className={classes.container}>
                        {data.map((i: any, idx: number) => (
                            <Item 
                                data={i}
                                title={i.name} 
                                price={i.price} 
                                image={i.images[0]} 
                                isDelete={false}
                                key={i._id} 
                                id={i._id} 
                                removeItem={() => console.log()}
                                addToCart={() => console.log()}
                            />
                        ))}
                    </div>
                </section>
            </Canva>
        </Fragment>
    )
};

export default Collection;