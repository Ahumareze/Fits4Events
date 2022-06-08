import React, { FC, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { currencyConverter } from '../../../../components';
import FilterItem from '../filterItem/FilterItem';

//styles
import classes from './SideBar.module.css';

interface SideBarProps{
    collection: any,
    filteredPrice: number;
    setFilteredPrice: (e: number) => void
}

const SideBar:FC<SideBarProps> = ({collection, filteredPrice, setFilteredPrice}):JSX.Element => {
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
                    max={1000}
                    value={filteredPrice} 
                    onChange={(e: any) => setFilteredPrice(e.target.value)}
                />
                <div className={classes.priceRange}>
                    <div className={classes.minPrice}>{currencyConverter(10)}</div>
                    <div className={classes.maxPrice}>{currencyConverter(1000)}</div>
                </div>
                <h3>Filtered Price: {currencyConverter(filteredPrice)}</h3>
                {/* <div className={classes.filterItem}>
                    <FilterItem title='Long Sleeves' value='lgs' />
                    <FilterItem title='Black' value='lgs' />
                    <FilterItem title='Jackets' value='lgs' />
                </div> */}
            </div>
        </div>
    );
}

export default SideBar;