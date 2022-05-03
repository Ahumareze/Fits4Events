import React, { FC, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import FilterItem from '../filterItem/FilterItem';

//styles
import classes from './SideBar.module.css';

interface SideBarProps{
    collection: any
}

const SideBar:FC<SideBarProps> = ({collection}):JSX.Element => {
    const [value, changeValue] = useState(500);

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
                    min={10}
                    max={500}
                    value={value} 
                    onChange={(e: any) => changeValue(e.target.value)}
                />
                <div className={classes.priceRange}>
                    <div className={classes.minPrice}>$10</div>
                    <div className={classes.maxPrice}>$500</div>
                </div>
                <h3>Filtered Price: ${value}</h3>
                <div className={classes.filterItem}>
                    <FilterItem title='Long Sleeves' value='lgs' />
                    <FilterItem title='Black' value='lgs' />
                    <FilterItem title='Jackets' value='lgs' />
                </div>
            </div>
        </div>
    );
}

export default SideBar;