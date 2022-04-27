import React from 'react';

//styles
import classes from './LandingPage.module.css';

//components
import Header from './header/Header';
import Intro from './Intro/Intro';
import Details from './Details/Details';


function LandingPage(props) {
    return (
        <div className={classes.LandingPage}>
            <Header />
            <Intro />
            <Details />
        </div>
    );
}

export default LandingPage;