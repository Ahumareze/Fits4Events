import React, { FC } from 'react';

//styles
import classes from './Button.module.css';

interface ButtonProps{
    text: string,
    children: any,
    onClick: () => void
}

const Button:FC<ButtonProps> = ({text, children, onClick}):JSX.Element => {
    return (
        <div className={classes.button} onClick={onClick}>
            <p>{text}</p>
            {children}
        </div>
    );
}

export default Button;