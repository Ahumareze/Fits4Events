import React from 'react';

//styles
import classes from './modal.module.css';

//components
import Currency from '../currency/Currency';

function Modal(props) {
    return (
        <div className={classes.container}>
            <div className={classes.main}>
                <h2>Currency - (USD)</h2>
                <div className={classes.currencies}>
                    <Currency active />
                    <Currency active={false} />
                    <Currency active={false} />
                </div>
                <div className={classes.bottom}>
                    <p className={classes.converter}>1 USD = 450 NGN</p>
                    <div className={classes.updateButton}>
                        <p>Update</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;