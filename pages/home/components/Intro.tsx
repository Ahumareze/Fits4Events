import React from 'react';

//styles
import classes from './Intro.module.css';

function Intro(props) {
    return (
        <div className={classes.Intro}>
            <div className={classes.Intro1}>
                <div className={classes.mainIntro}>
                    <h1>Every Outfit <br/>For<br/> Every Event</h1>
                    <p>We've got every style for every weather, event or mood you're in</p>
                </div>
            </div>
        </div>
    );
}

export default Intro;