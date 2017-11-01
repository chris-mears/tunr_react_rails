import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const Nav = styled.div `
width: 100%;
display: flex;
justify-content: space-between;
background: grey;
box-shadow: 0 3px 10px grey;
h1 {
    margin: 10px 0 10px 20px;
    color: white;
}
div {
    margin: 10px 20px 10px 0px;

}
a {
    color: white;
    font-size: 1.6em;

}

`

const NavBar = () => {
    return (
        <Nav>
            <h1>Tunr</h1>
            <div>
            <Link to='/'>All Artists</Link>
            </div>
        </Nav>
    );
};

export default NavBar;