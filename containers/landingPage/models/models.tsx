import React, { FC } from 'react';

//styles
import classes from './models.module.css';

import {MdVerified} from 'react-icons/md';
import {FiChevronRight, FiHeart} from 'react-icons/fi';

interface PostsProps{
    title: string,
    image: string,
    userData: any,
    active: boolean,
    slideOut: boolean
}

const Post:FC<PostsProps> = ({title, image, userData, active, slideOut}):JSX.Element => {
    return (
        <div className={`${classes.post} ${slideOut ? classes.slideOut : ''} ` } style={!active ? {display: 'none'} : {display: 'block'}} >
            <div className={classes.image} style={{backgroundImage: `url(${image})`}} />
            <p className={classes.title}>{title}</p>
            <div className={classes.userSection}>
                <div className={classes.userImage} style={{backgroundImage: `url(${userData.user})`}} />
                <div className={classes.userDetails}>
                    <div className={classes.userName}>
                        <p>{userData.fullname}</p>{userData.verified && <MdVerified size={16} color='#00acee' />}
                    </div>
                    <p className={classes.userProfession}>{userData.occupation}</p>
                </div>
            </div>
            <div className={classes.bottom}>
                <div className={classes.viewButton}>
                    <p>View</p><FiChevronRight size={20} color='#00acee' />
                </div>
                <div className={classes.favourite}>
                    <FiHeart size={20} />
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