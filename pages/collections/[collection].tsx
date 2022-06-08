import React, { Fragment, useEffect, useRef, useState } from 'react';

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
    //state
    const [filteredPrice, setFilteredPrice] = useState(1000);
    const [items, setItems] = useState(data);

    useEffect(() => {
        if(filteredPrice !== 1000){
            filterItems()
        }
    }, [filteredPrice])

    const filterItems = () => {
        const newArr = data?.filter(i => i.price < filteredPrice);
        if(newArr.length !== items.length){
            setItems(newArr)
        }
    }

    return (
        <Fragment>
            <header>
                <title>Fits4Event</title>
            </header>
            <Canva>
                <Header active='collections' />
                <section className={classes.section}>
                    <SideBar collection={route} filteredPrice={filteredPrice} setFilteredPrice={(e) => setFilteredPrice(e)} />
                    <div className={classes.container}>
                        {items?.map((i: any, idx: number) => (
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