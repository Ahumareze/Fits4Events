import React, { FC, useState } from 'react';

//styles
import classes from './FilterItem.module.css';

interface FilteredItemProps{
    title: string,
    value: string
}

const FilterItem:FC<FilteredItemProps> = ({title, value}):JSX.Element => {
    const [selected, setSelected] = useState<boolean>(false);

    const select = () => {
        setSelected((prev) => !prev);
    }

    return (
        <div className={classes.container} onClick={() => select()}>
            {selected ? <div className={classes.selectedBox} /> : <div className={classes.selectBox} /> }
            <p>{title}</p>
        </div>
    );
}

export default FilterItem;