import Link from 'next/link';
import React, {FC} from 'react';

//styles
import classes from './Collection.module.css';

interface CollectionProps {
    image: string,
    title: string,
    link: string
}

const Collection:FC<CollectionProps> = ({image, title, link}):JSX.Element => {
    return (
        <div className={classes.container}>
            <Link href={link}>
                <div className={classes.image} style={{backgroundImage: `url(${image})`}} />
            </Link>
            <h4>{title}</h4>
            <Link href={'/collections'}>
                <p>See all</p>
            </Link>
        </div>
    );
}

export default Collection;