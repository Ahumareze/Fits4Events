import Link from 'next/link';
import React, { FC } from 'react';

//styles
import classes from './header.module.css';

//icons
import {FiUser, FiShoppingBag, FiHeart} from 'react-icons/fi';
import {MdOutlineCollections} from 'react-icons/md';

interface HeaderProps{
    active: string
}

const Header:FC<HeaderProps> = ({active}):JSX.Element => {
    return (
        <div className={classes.header}>
            <div className={classes.logoContainer}>
                <Link href={'/'} passHref><p style={{cursor: 'pointer'}}>Fits<span>4</span>Events</p></Link>
            </div>
            <div className={classes.navigationContainer}>
                <Link href={'/collections'} passHref>
                    <div className={classes.icon}>
                        <MdOutlineCollections color={active === 'collections' ? '#F79D6E' : '#fff'} size={22} />
                    </div>
                </Link>
                <Link href={'/saved'} passHref>
                    <div className={classes.icon}>
                        <FiHeart color={active === 'saved' ? '#F79D6E' : '#fff'} size={20} />
                    </div>
                </Link>
                <Link href={'/shopping-bag'} passHref>
                    <div className={classes.icon}>
                        <FiShoppingBag color={active === 'cart' ? '#F79D6E' : '#fff'} size={20} />
                    </div>
                </Link>
                <Link href={'/profile'} passHref>
                    <div className={classes.icon}>
                        <FiUser color={active === 'profile' ? '#F79D6E' : '#fff'} size={20} />
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header;