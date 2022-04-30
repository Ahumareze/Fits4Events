import React from 'react';

//styles
import classes from './Collection.module.css';

function Collection(props) {
    return (
        <div className={classes.container}>
            <div className={classes.imgContainer}>
                <div className={classes.imgBackground}>
                    <div className={classes.backgroundBoard} />
                </div>
            </div>
            <div className={classes.titleContainer}>
                <h4>Sunglasses</h4>
                <p>See all</p>
            </div>
        </div>
    );
}

export default Collection;