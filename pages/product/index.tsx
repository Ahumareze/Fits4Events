import React, { useEffect } from 'react';

//components
import Router from 'next/router';

function index(props) {

    useEffect(() => {
            Router.push('/collections')
    }, [])

    return 
}

export default index;