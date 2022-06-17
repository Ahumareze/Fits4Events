import React, { Fragment, useEffect, useState } from 'react';


//styles
import classes from './profile.module.css';


//icons
import { FiCreditCard, FiDollarSign, FiInfo, FiLogOut } from 'react-icons/fi';

//components
import Router from 'next/router';
import { Canva, EmptyHistory, Header, link } from '../../components';
import UserDetails from './components/userDetails/UserDetails';
import Items from './components/items/Items';
import Modal from './components/modal/Modal';
import axios from 'axios';
import AddCardModal from './components/addCardModal/AddCardModal';
import AddressModal from './components/addressModal/AddressModal';


function Index(props) {
    //UI state
    const [modal, setModal] = useState<string>();
    const [addCardModal, setAddCardModal] = useState<boolean>(false);
    const [addressModal, setAddressModal] = useState<boolean>(false);
    const [activeCurrency, setActiveCurrency] = useState('');

    //userDetails
    const [user, setUser] = useState();

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
            setActiveCurrency(r.data.currency.code);
            setUser(r.data)
        }).catch(e => {
            console.log('Network error')
        })
    };

    const logout = () => {
        localStorage.removeItem('@fitsUserData');
        Router.push('/profile/auth')
    }

    return (
        <Fragment>
            <header>
                <title>Profile | Fits4Events</title>
            </header>
            <Canva>
                <Header active='profile' />
                <div className={classes.container}>
                <section className={classes.section}>
                    <div className={classes.mainProfile}>
                        <UserDetails user={user} />
                        <div className={classes.accountsettings}>
                            <h3>Account Settings</h3>
                            <Items title={`Change Currency (${activeCurrency})`} color='#F79D6E' onClick={() => setModal('currency')}>
                                <FiDollarSign />
                            </Items>
                            <Items title={'Add New Payment Card'} color='#4B6AE3' onClick={() => setAddCardModal(true)}>
                                <FiCreditCard />
                            </Items>
                            <Items title={'Update Billing Address'} color='#ffa2b2' onClick={() => setAddressModal(true)}>
                                <FiInfo />
                            </Items>
                            <Items title={'Sign Out'} color='#ff4848' onClick={() => logout()}>
                                <FiLogOut />
                            </Items>
                        </div>
                    </div>
                    <div className={classes.historyDiv}>
                        <h3>History</h3>
                        <p className={classes.historyDivP}>A list of your purchases will appear here</p>
                        <EmptyHistory />
                    </div>
                </section>
                </div>
            </Canva>
            {modal && <Modal closeModal={() => setModal(null)} />}
            {addCardModal && <AddCardModal closeModal={() => setAddCardModal(false)} />}
            {addressModal && <AddressModal closeModal={() => setAddressModal(false)} />}
        </Fragment>
    );
}

export default Index;