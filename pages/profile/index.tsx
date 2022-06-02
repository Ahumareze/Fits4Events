import React, { Fragment, useEffect } from 'react';

//components
import Router from 'next/router';
import { Canva, Header } from '../../components';
import UserDetails from './components/userDetails/UserDetails';
import Items from './components/items/Items';

//styles
import classes from './profile.module.css';
import { FiCreditCard, FiDollarSign, FiInfo, FiLogOut } from 'react-icons/fi';


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
                            <Items title={'Change Currency (NGN)'} color='#F79D6E'>
                                <FiDollarSign />
                            </Items>
                            <Items title={'Add New Payment Card'} color='#4B6AE3'>
                                <FiCreditCard />
                            </Items>
                            <Items title={'Update Billing Address'} color='#ffa2b2'>
                                <FiInfo />
                            </Items>
                            <Items title={'Sign Out'} color='#ff4848'>
                                <FiLogOut />
                            </Items>
                        </div>
                    </div>
                    <div className={classes.historyDiv}>
                        <h3>History</h3>
                        <p>A list of purchases made with this account will appear here</p>
                    </div>
                </section>
            </Canva>
        </Fragment>
    );
}

export default index;