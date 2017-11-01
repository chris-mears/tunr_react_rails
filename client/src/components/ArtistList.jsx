import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components';

const ArtistContainer = styled.div `
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`
const ArtistCard = styled.div `
    border: 1px solid black;
    box-shadow: 3px 3px 10px grey;
    margin: 20px 140px;
img {
    width: 400px;
    height: 250px;
}
div {
    padding-bottom: 5px;
}
a {
    color: grey;
    font-size: 1.2em;
    font-weight: bold;
}
`

const ArtistList = (props) => {
    return (
        <div>
            <h1>All Artists</h1>
            <ArtistContainer>
                {props
                    .artists
                    .map((artist) => {
                        return (
                            <ArtistCard>
                                <img src={artist.photo_url} alt={artist.name} />
                                <div>
                                <Link to={`/artists/${artist.id}`}>{artist.name}</Link>
                                </div>
                            </ArtistCard>
                        )
                    })
}
            </ArtistContainer>
        </div>
    );
};

export default ArtistList;