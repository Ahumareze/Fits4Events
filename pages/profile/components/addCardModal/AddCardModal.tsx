import React from 'react';

//component
import { FiX } from 'react-icons/fi';

//styles
import classes from './AddCardModal.module.css';

function AddCardModal({closeModal}) {
    return (
        <div className={classes.container}>
            <div className={classes.main}>
                <div className={classes.header}>
                    <h2>Add New Card</h2>
                    <div className={classes.cancleButton} onClick={() => closeModal()}>
                        <FiX size={20} />
                    </div>
                </div>
                <p className={classes.content}>All cards must be added through the integrated payment system for security reasons</p>
            </div>
        </div>
    );
}

export default AddCardModal;