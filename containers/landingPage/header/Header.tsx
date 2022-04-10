import React from 'react';

//styles
import classes from './Header.module.css';

//Imported components
import { Logo } from '../../../components';
import AuthButtons from './AuthButtons';

function Header() {
    return (
        <div className={classes.Header}>
            <div className={classes.grid1}>
                <Logo />
                <p className={classes.headerLinks}>About us</p>
                <p className={classes.headerLinks}>Company</p>
            </div>
            <div className={classes.grid2}>
                <AuthButtons name='Sign In' active={false} />
                <AuthButtons name='Sign Up' active />
            </div>
        </div>
    );
}

export default Header;