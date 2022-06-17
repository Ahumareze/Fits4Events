import React, { useEffect } from 'react';

//components
import Router from 'next/router';

function Index(props) {

    useEffect(() => {
            Router.push('/collections')
    }, [])

    return null
}

export default Index;