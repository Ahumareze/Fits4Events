import React, { FC } from 'react';

//styles
import classes from './Button.module.css';

interface ButtonProps{
    text: string,
    children: any
}

const Button:FC<ButtonProps> = ({text, children}):JSX.Element => {
    return (
        <div className={classes.button}>
            <p>{text}</p>
            {children}
        </div>
    );
}

export default Button;