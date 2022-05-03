import React, { FC, useState } from 'react';
import { FiSearch } from 'react-icons/fi';

//styles
import classes from './SideBar.module.css';

interface SideBarProps{
    collection: any
}

const SideBar:FC<SideBarProps> = ({collection}):JSX.Element => {
    const [value, changeValue] = useState(100)
    return (
        <div className={classes.sideBar}>
            <h2>{collection}</h2>
            <div className={classes.searchBar}>
                <input placeholder={`Search ${collection} ...`} />
                <div className={classes.searchBarIcon}>
                    <FiSearch color='#fff' opacity={0.9} size={22} />
                </div>
            </div>
            <div className={classes.priceFilterDiv}>
                <h4>Filter by price</h4>
                <input 
                    type={'range'} 
                    value={value} 
                    onChange={(e: any) => changeValue(e.target.value)}
                />
            </div>
        </div>
    );
}

export default SideBar;