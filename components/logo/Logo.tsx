import React from 'react';

//imported style
import classes from './Logo.module.css';

function Logo(props) {
    return (
        <p className={classes.Logo}>
            Start<span>Fund</span>
        </p>
    );
}

export default Logo;