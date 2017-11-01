import React from 'react';
import Song from './Song'
import styled from 'styled-components';

const SongsContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const SongList = (props) => {
    return (
        <div>
            <h2>All Songs</h2>
            <SongsContainer>
            {props
                .songs
                .map((song) => {
                    return <Song song={song} key={song.id} />
                })}
            </SongsContainer>
        </div>
    );
};

export default SongList;