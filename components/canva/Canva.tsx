import React, {FC} from 'react';

//styles
import classes from './Canva.module.css';

const canva = require('../../public/assets/canva.png');

interface CanvaProps{
    children: any
}

const Canva:FC<CanvaProps> = ({children}) => {
    return (
        <div className={classes.canva}>
            <div className={classes.mainCanva}>
                <img src={canva.default.src} />
            </div>
            <div className={classes.contents}>
                {children}
            </div>
        </div>
    );
}

export default Canva;