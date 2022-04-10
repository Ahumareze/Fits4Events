import React, { FC } from 'react';

//styles
import classes from './AuthButtons.module.css';

interface AuthButtonsProps{
    name: string,
    active: boolean
}

const AuthButtons:FC<AuthButtonsProps> = ({name, active}) => {
    return (
        <div className={active ? classes.AuthButtons : classes.inActiveButtons }>{name}</div>
    );
}

export default AuthButtons;