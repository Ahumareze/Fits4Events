import React from 'react';
import { FiInfo, FiX } from 'react-icons/fi';

//styles
import classes from './Notification.module.css';

function Notification({close, details}) {
    return (
        <div className={classes.container}>
            <div className={classes.iconContainer}>
                i
            </div>
            <p>{details}</p>
            <div className={classes.close} onClick={() => close()}>
                <FiX />
            </div>
        </div>
    );
}

export default Notification;