import React from 'react';

//styles
import classes from './LandingPage.module.css';

//components
import Header from './header/Header';
import Intro from './Intro/Intro';


function LandingPage(props) {
    return (
        <div className={classes.LandingPage}>
            <Header />
            <Intro />
        </div>
    );
}

export default LandingPage;