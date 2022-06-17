import React from 'react';

//styles
import classes from './Animations.module.css';

//components
import Lottie from 'react-lottie';
import Link from 'next/link';

//animations
import addToCartAnimation from './lotties/lf30_editor_6sn3wk1s.json';
import emptyHistoryAnimation from './lotties/lf30_editor_r9verdma.json';

//icons
import {FiChevronRight} from 'react-icons/fi';
import { useDispatch } from 'react-redux';

const AddedToCart = ({closeModal}) => {
    const dispatch = useDispatch();

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: addToCartAnimation,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className={classes.container} onClick={() => closeModal()}>
            <div className={classes.main}>
                <Lottie
                    options={defaultOptions}
                    height={100}
                    width={100}
                />
                <h2>Added To Cart</h2>
                <p className={classes.mainDetails}>Your Product was successfully added to bag, why not continue exploring our items?</p>
                <Link href={'/collections'}>
                    <div className={classes.mainButton}>
                        <p>Browse Collections</p>
                        <FiChevronRight size={20} />
                    </div>
                </Link>
            </div>
        </div>
    );
}

const EmptyHistory = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: emptyHistoryAnimation,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    };
    return(
        <div>
            <Lottie
                options={defaultOptions}
                height={300}
                width={300}
            />
        </div>
    )
}

export {
    AddedToCart,
    EmptyHistory
};