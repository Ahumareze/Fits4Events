import React, { FC, useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

//styles
import classes from './Input.module.css';

interface InputProps{
    title: string,
    value: string,
    onChange: (e: string) => void
}

const Input:FC<InputProps> = ({title, value, onChange}):JSX.Element => {
    const [secure, setSecure] = useState(true);

    let container;
    if(title === 'Password'){
        container = (
            <div className={classes.inputContainer}>
                <input type={secure ? 'password' : 'text'} onChange={(e) => onChange(e.target.value)} />
                <div className={classes.iconContainer}>
                    {secure ? <FiEye className={classes.icon} onClick={() => setSecure(prev => !prev)} /> : <FiEyeOff className={classes.icon} onClick={() => setSecure(prev => !prev)} />}
                </div>
            </div>
        )
    }else{
        container = <input className={classes.mainInput} onChange={(e) => onChange(e.target.value)} />
    }

    return (
        <div className={classes.container}>
            <p>{title}</p>
            {container}
        </div>
    );
}

export default Input;