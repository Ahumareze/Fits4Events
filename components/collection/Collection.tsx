import Link from 'next/link';
import React, {FC, useState} from 'react';

//styles
import classes from './Collection.module.css';

interface CollectionProps {
    image: string,
    title: string,
    link: string,
    collectionPage: boolean
}

const Collection:FC<CollectionProps> = ({image, title, link, collectionPage}):JSX.Element => {
    const [showHover, setShowHover] = useState(false)

    let seeAll = (
        <div className={showHover ? classes.hoverDiv : classes.hoverDivFadeOut}>
            <div className='DeleteDivMain'>
                <Link href={link}>
                    <p>Browse {title}</p>
                </Link>
            </div>
        </div>
    )

    return (
        <div className={classes.container}>
            <div className={classes.image} onMouseEnter={() => setShowHover(true)} onMouseLeave={() => setShowHover(false)} style={{backgroundImage: `url(${image})`}}>
                {seeAll}
            </div>
            <h4>{title}</h4>
            {/* {!collectionPage ?
                <Link href={'/collections'}>
                    <p>See all</p>
                </Link>
                :
                <Link href={link}>
                    <p>Browse {title}</p>
                </Link>
            } */}
        </div>
    );
}

export default Collection;