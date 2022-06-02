import React from 'react';

//styles
import classes from './currency.module.css';

function Currency({active}) {
    return (
        <div className={classes.container} style={active ? {borderColor: '#F79D6E', backgroundColor: '#333333'} : {}}>
            
        </div>
    );
}

export default Currency;