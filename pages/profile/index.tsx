import React, { Fragment, useEffect, useState } from 'react';


//styles
import classes from './profile.module.css';


//icons
import { FiCreditCard, FiDollarSign, FiInfo, FiLogOut } from 'react-icons/fi';

//components
import Router from 'next/router';
import { Canva, Header, link } from '../../components';
import UserDetails from './components/userDetails/UserDetails';
import Items from './components/items/Items';
import Modal from './components/modal/Modal';
import axios from 'axios';


function index(props) {
    //UI state
    const [modal, setModal] = useState<string>();
    const [activeCurrency, setActiveCurrency] = useState('');

    useEffect(() => {
        const localId = localStorage.getItem('@fitsUserData');
        if(localId){
            const parsedLocalData = JSON.parse(localId);
            fetchData(parsedLocalData.id)
        }else{
            Router.push('/profile/auth')
        }
    }, []);

    const fetchData = (id) => {
        axios.post(link + '/get-user', {id})
            .then(r => {
                localStorage.setItem('@localCurrency', JSON.stringify(r.data.currency))
                setActiveCurrency(r.data.currency.code)
        }).catch(e => {
            console.log('Network error')
        })
    }

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
                            <Items title={`Change Currency (${activeCurrency})`} color='#F79D6E' onClick={() => setModal('currency')}>
                                <FiDollarSign />
                            </Items>
                            <Items title={'Add New Payment Card'} color='#4B6AE3' onClick={() => setModal('currency')}>
                                <FiCreditCard />
                            </Items>
                            <Items title={'Update Billing Address'} color='#ffa2b2' onClick={() => setModal('currency')}>
                                <FiInfo />
                            </Items>
                            <Items title={'Sign Out'} color='#ff4848' onClick={() => setModal('currency')}>
                                <FiLogOut />
                            </Items>
                        </div>
                    </div>
                    <div className={classes.historyDiv}>
                        <h3>History</h3>
                        <p className={classes.historyDivP}>A list of your purchases will appear here</p>
                    </div>
                </section>
            </Canva>
            {modal && <Modal closeModal={() => setModal(null)} />}
        </Fragment>
    );
}

export default index;