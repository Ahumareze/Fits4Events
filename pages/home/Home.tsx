import React, { Fragment } from 'react';

//Components
import { Canva, Header } from '../../components';
import Intro from './components/intro';

function Home(props) {
    return (
        <Fragment>
            <header>
                <title>Fits4Events</title>
            </header>
            <Canva>
                <Header />
                <Intro />
            </Canva>
        </Fragment>
    );
}

export default Home;