import React from 'react';
import { FiInfo, FiX } from 'react-icons/fi';

//styles
import classes from './Notification.module.css';

function Notification({close}) {
    return (
        <div className={classes.container}>
            <div className={classes.iconContainer}>
                i
            </div>
            <p>Item Already Exists In Bag</p>
            <div className={classes.close} onClick={() => close()}>
                <FiX />
            </div>
        </div>
    );
}

export default Notification;