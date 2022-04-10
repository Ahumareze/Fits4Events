import React from 'react';

//imported style
import classes from './Logo.module.css';

function Logo(props) {
    return (
        <div className={classes.Logo}>
            <p className={classes.LogoText}>
                Start<span>Fund</span>
            </p>
            <div className={classes.dot} />
        </div>
    );
}

export default Logo;