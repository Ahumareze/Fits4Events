import React, { useState } from 'react';

//styles
import classes from './modal.module.css';

//components
import { US, GB, NG } from 'country-flag-icons/react/3x2'

//components
import Currency from '../currency/Currency';

function Modal(props) {
    //states
    const [active, setActive] = useState<string>('USD');

    return (
        <div className={classes.container}>
            <div className={classes.main}>
                <h2>Currency - ({active})</h2>
                <div className={classes.currencies}>
                    <Currency active={active === 'USD'} title={'USD'} select={() => setActive('USD')}>
                        <US title="United States" className={classes.flag}/>
                    </Currency>
                    <Currency active={active === 'GPB'} title={'GPB'} select={() => setActive('GPB')}>
                        <GB title="Great Britain" className={classes.flag}/>
                    </Currency>
                    <Currency active={active === 'NGN'} title={'NGN'} select={() => setActive('NGN')}>
                        <NG title="Nigeria" className={classes.flag}/>
                    </Currency>
                </div>
                <div className={classes.bottom}>
                    <p className={classes.converter}>1 USD = 450 {active}</p>
                    <div className={classes.updateButton}>
                        <p>Update</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;