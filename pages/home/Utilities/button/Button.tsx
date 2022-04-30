import Link from 'next/link';
import React from 'react';

//icons
import { FiChevronRight } from 'react-icons/fi';

//styles
import classes from './Button.module.css';

function Button(props) {
    return (
        <Link href={'/collections'}>
            <div className={classes.button}>
                <div className={classes.main}>
                    <p>Shop Now</p>
                    <FiChevronRight color='#fff' size={25} />
                </div>
            </div>
        </Link>
    );
}

export default Button;