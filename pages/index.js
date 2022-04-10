import React, { Fragment } from 'react';
import {LandingPage} from '../containers';

function HomePage(props) {
    return (
        <Fragment>
            <header>
                <title>StartFund</title>
            </header>
            <LandingPage />
        </Fragment>
    );
}

export default HomePage;