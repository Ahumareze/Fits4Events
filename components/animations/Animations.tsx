import React from 'react';

//styles
import classes from './Animations.module.css';

//components
import Lottie from 'react-lottie';
import addToCartAnimation from './lotties/lf30_editor_6sn3wk1s.json';
import Link from 'next/link';
import * as actions from '../../redux/actions';

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

export {
    AddedToCart
};