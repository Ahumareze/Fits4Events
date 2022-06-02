import React from 'react';

//styles
import classes from './UserDetails.module.css';

function UserDetails(props) {
    return (
        <div className={classes.container}>
            <div className={classes.containerBackground} />
            <div className={classes.main}>
                <div className={classes.image} />
                <div className={classes.mainSection}>
                    <p className={classes.username}>King Shasha</p>
                    <p className={classes.email}>ahumarezeifeanyi001@gmail.com</p>
                </div>
            </div>
        </div>
    );
}

export default UserDetails;