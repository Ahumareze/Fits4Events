import React, { useEffect, useState } from 'react';

//styles
import classes from './Coursel.module.css';

const data = [
    'https://res.cloudinary.com/ahumareze/image/upload/v1653071615/fzz40898_black_xl_gdktky.jpg',
    'https://res.cloudinary.com/ahumareze/image/upload/v1653071617/E2842A4D-9F3D-4892-AA4C-BA5C7BCB6693_ggkix6.jpg',
    'https://res.cloudinary.com/ahumareze/image/upload/v1653074966/20112b301c27baf4c0ee54a2d01cb33a_kkfbln.jpg'
]

function Coursel(props) {
    const [active, setActive] = useState<number>(2);

    useEffect(() => {
        updateImage();
        // eslint-disable-next-line
    }, [active])

    const updateImage = () => {
        setTimeout(() => {
            if(active === 2){
                setActive(0)
            }else{
                setActive(prev => prev + 1)
            }
        }, 10000)
    }

    return (
        <div className={classes.container}>
            <div className={classes.div1} style={{backgroundImage: `url(${active !== 0 ? data[active - 1] : data[2]})`}}>
                {data.map((i: string, idx: number) => (
                    <div 
                        className={active === idx ? classes.activeImage : classes.image} 
                        style={{backgroundImage: `url(${i})`}} 
                        key={idx}
                    />
                ))}
            </div>
            <div className={classes.div2}>
                <div className={classes.blurryBox}>
                    <h2>Every Outfit For Every Event</h2>
                    <p className={classes.intro}>Shop at fit4events and we've got you covered on every outfit you desire for every event.</p>
                    <p className={classes.intro2}>Can't decied what to wear? Let us help you pick the perfect outfit for your event, use the new QuickFit algorithm to help you choose your next outfit.</p>
                </div>
            </div> 
        </div>
    );
}

export default Coursel;