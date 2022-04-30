import React from 'react';

//styles
import classes from './Intro.module.css';

function Intro(props) {
    return (
        <div className={classes.Intro}>
            <div className={classes.Intro1}>
                <div className={classes.mainIntro}>
                    <h1>Every Outfit <br/>For<br/> Every Event</h1>
                </div>
            </div>
        </div>
    );
}

export default Intro;