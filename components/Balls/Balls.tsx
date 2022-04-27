import React from 'react';

//Styles
import classes from './Balls.module.css';

const BlueBall = () => {
    return(
        <div className={classes.BlueBall} />
    )
}

const RedBall = () => {
    return(
        <div className={classes.RedBall} />
    )
};

export {
    BlueBall,
    RedBall
}