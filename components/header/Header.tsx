import Link from 'next/link';
import React from 'react';

//styles
import classes from './header.module.css';

//icons
import {FiUser, FiShoppingBag, FiHeart} from 'react-icons/fi'

function Header(props) {
    return (
        <div className={classes.header}>
            <div className={classes.logoContainer}>
                <p>Logo</p>
            </div>
            <div className={classes.navigationContainer}>
                <Link href={'/quickfits'}><p>Quick Fits</p></Link>
                <Link href={'/collections'}><p>Collections</p></Link>
                <Link href={'/men'}><p>Men</p></Link>
                <Link href={'/women'}><p>Women</p></Link>
                <Link href={'/favourites'}>
                    <div className={classes.icon}>
                        <FiHeart color='#fff' size={20} />
                    </div>
                </Link>
                <Link href={'/cart'}>
                    <div className={classes.icon}>
                        <FiShoppingBag color='#fff' size={20} />
                    </div>
                </Link>
                <Link href={'/profile'}>
                    <div className={classes.icon}>
                        <FiUser color='#fff' size={20} />
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header;