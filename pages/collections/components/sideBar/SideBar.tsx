import React, { FC } from 'react';
import { FiSearch } from 'react-icons/fi';

//styles
import classes from './SideBar.module.css';

interface SideBarProps{
    collection: any
}

const SideBar:FC<SideBarProps> = ({collection}):JSX.Element => {
    return (
        <div className={classes.sideBar}>
            <h2>{collection}</h2>
            <div className={classes.searchBar}>
                <input placeholder={`Search ${collection} ...`} />
                <div className={classes.searchBarIcon}>
                    <FiSearch color='#fff' opacity={0.9} size={22} />
                </div>
            </div>
        </div>
    );
}

export default SideBar;