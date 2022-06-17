import React from 'react';

//styles
import classes from './UserDetails.module.css';

function UserDetails({user}) {
    console.log(user?.fullname.charAt(0))
    return (
        <div className={classes.container}>
            <div className={classes.containerBackground} />
            <div className={classes.main}>
                <div className={classes.image}>
                    {user?.fullname.charAt(0)}
                </div>
                <div className={classes.mainSection}>
                    <p className={classes.username}>{user?.fullname}</p>
                    <p className={classes.email}>{user?.email}</p>
                </div>
            </div>
        </div>
    );
}

export default UserDetails;