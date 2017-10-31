import React from 'react';
import Song from './Song'

const SongList = (props) => {
    return (
        <div>
            <h2>All Songs</h2>
            {props
                .songs
                .map((song) => {
                    return <Song song={song} key={song.id} />
                })}
        </div>
    );
};

export default SongList;