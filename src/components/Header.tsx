import * as React from 'react';
import { Jumbotron } from 'react-bootstrap/lib';
import W from './GlobalText';

function Header() {
    return (
        <Jumbotron>
            <h1>{W.Title}</h1>
            <p>{W.SubTitle}</p>
        </Jumbotron>
    )}

export default Header;