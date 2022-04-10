import React from 'react';

//styles
import classes from './models.module.css';

//imported utilities
const skycrapper = require('../../../public/assets/skycrapper.png')
const user = require('../../../public/assets/user1.jpg');

const Post = () => {
    return (
        <div className={classes.post}>
            <div className={classes.image} style={{backgroundImage: `url(${skycrapper.default.src})`}} />
            <p className={classes.title}>Plans for 5 star hotel in Lekki</p>
            <div className={classes.userSection}>
                <div className={classes.userImage} style={{backgroundImage: `url(${user.default.src})`}} />
                <div className={classes.userDetails}>
                    <div className={classes.userName}>
                        <p>Username</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

const Search = () => {
    return (
        <div>Search</div>
    )
}

export {
    Post,
    Search
}