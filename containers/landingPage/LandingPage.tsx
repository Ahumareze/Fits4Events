import React from 'react';

//styles
import classes from './LandingPage.module.css';

//components
import Header from './header/Header';


function LandingPage(props) {
    return (
        <div className={classes.LandingPage}>
            <Header />
        </div>
    );
}

export default LandingPage;