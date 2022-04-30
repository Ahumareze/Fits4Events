import React from 'react';

//styles
import classes from './Intro.module.css';

//components
import Button from '../../Utilities/button/Button';

//images
const arrow = require('../../../../public/assets/arrow.png');
const ball = require('../../../../public/assets/ball.png');
const x = require('../../../../public/assets/x.png');
const casual = require('../../../../public/assets/casual.png');
const formal = require('../../../../public/assets/formal.png');


function Intro(props) {
    return (
        <div className={classes.Intro}>
            <div className={classes.Intro1}>
                <div className={classes.mainIntro}>
                    <h1>Every Outfit <br/>For<br/> Every Event</h1>
                    <p className={classes.description}>We've got every style for every weather, event or mood you're in</p>
                    <div className={classes.introExraDesign}>
                        <Button />
                        <img src={arrow.default.src} />
                    </div>
                </div>
                <div className={classes.IntroImages}>
                    <div className={classes.IntroImgDiv1}>
                        <img src={ball.default.src} className={classes.ball} />
                        <div className={classes.main}>
                            <img src={casual.default.src} />
                            <p>Casual</p>
                        </div>
                    </div>
                    <div className={classes.IntroImgDiv1}>
                        <img src={x.default.src} className={classes.x} />
                        <div className={classes.main2}>
                            <img src={formal.default.src} />
                            <p>Formal</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Intro;