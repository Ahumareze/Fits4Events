import React, { Fragment, useEffect } from 'react';

//components
import Router from 'next/router';
import { Canva, Header } from '../../components';
import UserDetails from './components/userDetails/UserDetails';
import Items from './components/items/Items';

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
                    <div className={classes.mainProfile}>
                        <UserDetails />
                        <div className={classes.accountsettings}>
                            <h3>Account Settings</h3>
                            <Items />
                        </div>
                    </div>
                </section>
            </Canva>
        </Fragment>
    );
}

export default index;