import React from 'react';
import { FiChevronRight, FiDollarSign } from 'react-icons/fi';

//styles
import classes from './Items.module.css';

function Items({title, children, color}) {
    return (
        <div className={classes.container}>
            <div className={classes.iconContainer} style={{backgroundColor: color}}>
                {children}
            </div>
            <p>{title}</p>
            <div className={classes.arrowButton}>
                <FiChevronRight size={23} />
            </div>
        </div>
    );
}

export default Items;