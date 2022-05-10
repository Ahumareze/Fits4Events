import Link from 'next/link';
import React, { FC } from 'react';

//styles
import classes from './header.module.css';

//icons
import {FiUser, FiShoppingBag, FiHeart} from 'react-icons/fi';

interface HeaderProps{
    active: string
}

const Header:FC<HeaderProps> = ({active}):JSX.Element => {
    return (
        <div className={classes.header}>
            <div className={classes.logoContainer}>
                <Link href={'/'}><p style={{cursor: 'pointer'}}>Logo</p></Link>
            </div>
            <div className={classes.navigationContainer}>
                <Link href={'/quickfits'}><p  style={active === 'quickFits' ? {color: '#F79D6E'} : {}}>Quick Fits</p></Link>
                <Link href={'/collections'}><p style={active === 'collections' ? {color: '#F79D6E'} : {}}>Collections</p></Link>
                <Link href={'/collections/men'}><p style={active === 'men' ? {color: '#F79D6E'} : {}}>Men</p></Link>
                <Link href={'/collections/women'}><p style={active === 'women' ? {color: '#F79D6E'} : {}}>Women</p></Link>
                <Link href={'/favourites'}>
                    <div className={classes.icon}>
                        <FiHeart color={active === 'favoutites' ? '#F79D6E' : '#fff'} size={20} />
                    </div>
                </Link>
                <Link href={'/shopping-bag'}>
                    <div className={classes.icon}>
                        <FiShoppingBag color={active === 'cart' ? '#F79D6E' : '#fff'} size={20} />
                    </div>
                </Link>
                <Link href={'/profile'}>
                    <div className={classes.icon}>
                        <FiUser color={active === 'profile' ? '#F79D6E' : '#fff'} size={20} />
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header;