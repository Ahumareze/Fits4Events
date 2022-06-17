import React, {FC} from 'react';

//styles
import classes from './SizeButtons.module.css';

interface SizeProps{
    size: string,
    selected: boolean,
    select: (e: string) => void
}

const SizeButtons:FC<SizeProps> = ({size, selected, select}):JSX.Element => {
    return (
        <div className={selected ? classes.box : classes.box2} onClick={() => select(size)}>
            {size}
        </div>
    );
}

export default SizeButtons;