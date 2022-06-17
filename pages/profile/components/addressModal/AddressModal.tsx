import React from 'react';

//component
import { FiX } from 'react-icons/fi';
import { Button, Input } from '../../../../components';

//styles
import classes from './AddressModal.module.css';

function AddressModal({closeModal}) {
    return (
        <div className={classes.container}>
            <div className={classes.main}>
                <div className={classes.header}>
                    <h2>Update Billing Address</h2>
                    <div className={classes.cancleButton} onClick={() => closeModal()}>
                        <FiX size={20} />
                    </div>
                </div>
                <Input title='First Name' value='' onChange={(e) => console.log(e)}/>
                <Input title='Last Name' value='' onChange={(e) => console.log(e)}/>
                <Input title='Phone' value='' onChange={(e) => console.log(e)}/>
                <Input title='Email Address' value='' onChange={(e) => console.log(e)}/>
                <div className={classes.space} />
                <Button text='Update Address' onClick={() => window.location.reload()}>
                    
                </Button>
            </div>
        </div>
    );
}

export default AddressModal;