import React, { useEffect, useState } from 'react';

//styles
import classes from './modal.module.css';

//components
import { US, GB, NG, EU, JP, CD } from 'country-flag-icons/react/3x2'

//components
import Currency from '../currency/Currency';

//components
import { CurrencyApiKey, link } from '../../../../components';
import axios from 'axios';

//icons
import { FiX } from 'react-icons/fi';

function Modal({closeModal}) {
    //states
    const [loading, setLoading] = useState(false);
    const [postLoading, setPostLoading] = useState(false);
    const [active, setActive] = useState<any>();

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('@localCurrency'))
        if(data){
            setActive(data)
        };
    }, [])

    const update = (value) => {
        setLoading(true)
        axios.get(`https://api.currencyapi.com/v3/historical?apikey=${CurrencyApiKey}&base_currency=USD&date=2022-06-01`)
            .then(r => {
                const data = r.data.data[value];
                setActive(data);
                setLoading(false)
            }).catch(e => {
                console.log(e);
                setLoading(false)
        })
    };

    const updateProfile = () => {
        setPostLoading(true)
        const id = JSON.parse(localStorage.getItem('@fitsUserData')).id;
        axios.post(link + '/update-currency', {id, currency: active})
            .then(r => {
                window.location.reload();
                // setPostLoading(false)
            })
            .catch(e => {
                console.log(e);
                setPostLoading(false)
        })
    }

    return (
        <div className={classes.container}>
            <div className={classes.main}>
                <div className={classes.header}>
                    <h2>Currency - ({active?.code})</h2>
                    <div className={classes.cancleButton} onClick={closeModal}>
                        <FiX size={20} />
                    </div>
                </div>
                <div className={classes.currencies}>
                    <Currency active={active?.code === 'USD'} title={'USD'} select={() => update('USD')}>
                        <US title="United States" className={classes.flag}/>
                    </Currency>
                    <Currency active={active?.code === 'GBP'} title={'GBP'} select={() => update('GBP')}>
                        <GB title="Great Britain" className={classes.flag}/>
                    </Currency>
                    <Currency active={active?.code === 'NGN'} title={'NGN'} select={() => update('NGN')}>
                        <NG title="Nigeria" className={classes.flag}/>
                    </Currency>
                    <Currency active={active?.code === 'EUR'} title={'EUR'} select={() => update('EUR')}>
                        <EU title="Euro" className={classes.flag}/>
                    </Currency>
                    <Currency active={active?.code === 'JPY'} title={'JPY'} select={() => update('JPY')}>
                        <JP title="Yen" className={classes.flag}/>
                    </Currency>
                    <Currency active={active?.code === 'CAD'} title={'CAD'} select={() => update('CAD')}>
                        <CD title="Canadian Dollars" className={classes.flag}/>
                    </Currency>
                </div>
                <div className={classes.bottom}>
                    {!loading ? <p className={classes.converter}>1 USD = {1 * active?.value} {active?.code}</p> : <p className={classes.converter}>Loading ...</p> }
                    {!postLoading ?
                        <div className={classes.updateButton} onClick={updateProfile}>
                            <p>Update</p>
                        </div> :
                        <div className={classes.updateButton}>
                            <p>Loading...</p>
                        </div> 
                    }
                </div>
            </div>
        </div>
    );
}

export default Modal;