import React from 'react';

//styles
import classes from './EmptyPage.module.css';

//components
import Lottie from 'react-lottie';
import addToCartAnimation from '../animations/lotties/lf30_editor_jja16yaz.json';
import Link from 'next/link';

//icons
import { FiChevronRight } from 'react-icons/fi';

function EmptyPage({saved}) {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: addToCartAnimation,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className={classes.container}>
            <Lottie
                options={defaultOptions}
                height={200}
                width={200}
            />
            <h2>{!saved ? "Empty Bag" : "No Saved Item"}</h2>
            <p className={classes.mainDetails}>{!saved ? 'Sorry it looks like your bag is empty, start adding items to bag to continue.' : 'It looks like you have no saved item, start browsing from our collection'}</p>
            <Link href={'/collections'} passHref>
                <div className={classes.mainButton}>
                    <p>Browse Collections</p>
                    <FiChevronRight size={20} />
                </div>
            </Link>
        </div>
    );
}

export default EmptyPage;