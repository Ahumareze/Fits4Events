import React, { Fragment, useEffect } from 'react';

//components
import Router from 'next/router';
import { Canva, Header } from '../../components';

//styles
import classes from './profile.module.css';

function index(props) {
    useEffect(() => {
        const localId = localStorage.getItem('@fitsUserData');
        if(localId){
            const parsedLocalData = JSON.parse(localId);
            console.log(parsedLocalData.id)
        }else{
            Router.push('/profile/auth')
        }
    }, [])

    return (
        <Fragment>
            <header>
                <title>Profile | Fits4Events</title>
            </header>
            <Canva>
                <Header active='profile' />
                <section className={classes.section}>

                </section>
            </Canva>
        </Fragment>
    );
}

export default index;