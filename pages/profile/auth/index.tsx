import React, { Fragment, useState } from 'react';

//components
import axios from 'axios';
import { Header, Input, link, Loader } from '../../../components';
import Coursel from '../components/coursel/Coursel';
import Router from 'next/router';

//styles
import classes from './Auth.module.css';


function index(props) {
    //UI state
    const [isSignup, setIsSignup] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string>();

    //form state
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');


    const postSignup = () => {
        setIsLoading(true)
        const data = {
            fullname: firstName + " " + lastName,
            email,
            password,
            currency: "USD",
            history: []
        };
        axios.post(link + '/signup', data).then(r => {
            authSuccess(r.data)
        }).catch(e => {
            if(e.response){
                setErrorMessage(e.response.data.message)
            }else{
                setErrorMessage('Network error')
            }
            setIsLoading(false);
        })
    };

    const postLogin = () => {
        setIsLoading(true);
        const data = {
            email,
            password
        }
        axios.post(link + '/login', data).then(r => {
            authSuccess(r.data)
        }).catch(e => {
            if(e.response){
                setErrorMessage(e.response.data.message);
                console.log(e.response.data.message)
            }else{
                setErrorMessage('Network error')
            }
            setIsLoading(false);
        })
    }

    const authSuccess = (data) => {
        localStorage.setItem('@fitsUserData', JSON.stringify(data));
        Router.push('/profile')
    }

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
                <div className={classes.button} onClick={() => postSignup()}>Sign Up</div>
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
                <div className={classes.button} onClick={postLogin}>Sign In</div>
                <p className={classes.account} onClick={() => setIsSignup(true)}>Don't have an account? <span>Create account</span></p>
            </div>
        )
    }
    return (
        <Fragment>
            <header>
                <title>Auth | Fits4Events</title>
            </header>
            <Header active='profile' />
            <section className={classes.container}>
                <div className={classes.div1}>
                    {!isLoading ? container : <Loader /> }
                </div>
                <div className={classes.div2}>
                    <Coursel />
                </div>
            </section>
        </Fragment>
    );
}

export default index;