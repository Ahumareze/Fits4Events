import React from 'react';

//styles
import classes from './Header.module.css';

//Imported components
import { Logo } from '../../../components';

function Header() {
    return (
        <div className={classes.Header}>
            <Logo />
        </div>
    );
}

export default Header;