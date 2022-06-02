import React from 'react';

//styles
import classes from './currency.module.css';

function Currency({active, children, title, select}) {
    return (
        <div onClick={select} className={classes.container} style={active ? {borderColor: '#F79D6E', backgroundColor: '#333333', color: '#fff'} : {}}>
            {children}
            <p>{title}</p>
        </div>
    );
}

export default Currency;