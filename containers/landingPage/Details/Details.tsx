import React from 'react';

//styles
import classes from './Details.module.css';

//components
import { RedBall } from '../../../components';

function Details() {
    return (
        <div className={classes.container} data-aos="fade-up">
            <div className={classes.container1}>
                <div className={classes.canva}>
                    <RedBall />
                </div>
            </div>
            <div className={classes.container2}>
                <h1>Access to Ideas and Projects all Around the Globe</h1>
                <p>Why limit yourself to ideas investment opportunities within your vicinity, Logo provides access to ideas and investors around the world.</p>
                <div data-aos="fade-up">Get Started</div>
            </div>
        </div>
    );
}

export default Details;