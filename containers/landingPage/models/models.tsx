import React from 'react';

//styles
import classes from './models.module.css';

//imported utilities
const skycrapper = require('../../../public/assets/skycrapper.png')

const Post = () => {
    return (
        <div className={classes.post}>
            <div className={classes.image} style={{backgroundImage: `url(${skycrapper.default.src})`}} />
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