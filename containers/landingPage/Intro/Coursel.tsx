import React, { useState } from 'react';

//styles
import classes from './Coursel.module.css';

//imported components
import { Post } from '../models/models';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

//Imported utilities
import data from './courselData';

function Coursel(props) {
    const [activeCoursel, setActiveCoursel] = useState<number>(0);
    const [slideOut, setSlideOut] = useState<boolean>(false)

    const next = () => {
        if(activeCoursel < 2){
            setSlideOut(true);
            setTimeout(() => {
                setSlideOut(false)
                setActiveCoursel((pre) => pre + 1)
            }, 800);
            
        }
    }

    const prev = () => {
        if(activeCoursel > 0){
            setSlideOut(true)
            setTimeout(() => {
                setSlideOut(false)
                setActiveCoursel((pre) => pre - 1)
            }, 800);
        }
    }

    return (
        <div className={classes.main}>
            <div className={classes.buttonsContainer}>
                <div className={classes.button} onClick={() => prev()}>
                    <FiChevronLeft size={25} color='#000' />
                </div>
            </div>
            <div className={classes.container}>
                {data.map((i: any, idx: number) => (
                    <Post 
                        title={i.title}
                        image={i.image}
                        userData={i.user}
                        active={idx === activeCoursel} 
                        slideOut={slideOut}
                        key={idx}
                    />
                ))}
            </div>
            <div className={classes.buttonsContainer}>
            <div className={classes.button} onClick={() => next()}>
                    <FiChevronRight size={25} color='#000' />
                </div>
            </div>
        </div>
    );
}

export default Coursel;