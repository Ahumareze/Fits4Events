import React, { Fragment, useState } from 'react';
import { Header, Input } from '../../components';
import Coursel from './components/coursel/Coursel';

//styles
import classes from './profile.module.css';

function index(props) {
    const [isSignup, setIsSignup] = useState(true);

    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    let container;
    if(isSignup){
        container = (
                <div className={classes.form}>
                    <h1>Create Account</h1>
                    <Input title='First Name' value={firstName} onChange={(e) => setFirstName(e)} />
                    <Input title='Last Name' value={lastName} onChange={(e) => setLastName(e)} />
                    <Input title='Email Address' value={email} onChange={(e) => setEmail(e)} />
                    <Input title='Password' value={password} onChange={(e) => setPassword(e)} />
                    {/* <p className={classes.terms}>By signing up you have agreed to our <span>terms and conditions</span></p> */}
                    <div className={classes.button}>Sign Up</div>
                    <p className={classes.account} onClick={() => setIsSignup(false)}>Already have an account? <span>Login</span></p>
                </div>
        )
    }else{
        container = (
            <div className={classes.form}>
                <h1>Login</h1>
                <Input title='Email Address' value={lastName} onChange={(e) => setEmail(e)} />
                <Input title='Password' value={password} onChange={(e) => setPassword(e)} />
                {/* <p className={classes.terms}>By signing up you have agreed to our <span>terms and conditions</span></p> */}
                <div className={classes.button}>Sign In</div>
                <p className={classes.account} onClick={() => setIsSignup(true)}>Don't have an account? <span>Create account</span></p>
            </div>
        )
    }

    return (
        <Fragment>
            <header>
                <title>Saved Items | Fits4Events</title>
            </header>
            <Header active='profile' />
            <section className={classes.container}>
                <div className={classes.div1}>
                    {container}
                </div>
                <div className={classes.div2}>
                    <Coursel />
                </div>
            </section>
        </Fragment>
    );
}

export default index;