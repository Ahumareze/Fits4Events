import React from 'react';

//styles
import classes from './Intro.module.css';

//imported components
import { Post } from '../models/models';

function Intro(props) {
    return (
        <div className={classes.Intro}>
            <div className={classes.grid1}>
                <h1>Bridging the gap <br /> between Investors <br /> and Ideas</h1>
                <p>StartFund is a platform that helps investors connect with <br /> intresting ideas and creative thinkers.</p>
                <div>Get Started</div>
            </div>
            <div className={classes.grid2}>
                <Post />
            </div>
        </div>
    );
}

export default Intro;