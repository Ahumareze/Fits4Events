import { Fragment } from 'react';
import Link from 'next/link';

function NewsPage(props) {
    return (
        <Fragment>
            <h1>News Page</h1>
            <ul>
                <li><Link href='/news/next-is-cool'>NextJs is cool</Link></li>
                <li><a href='/news/react-is-better'>React is beter</a></li>
            </ul>
        </Fragment>
    );
}

export default NewsPage;