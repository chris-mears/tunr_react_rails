import React from 'react';

const componentName = (props) => {
    return (
        <div>
            <h4>{props.song.title}</h4>
            <h5>{props.song.album}</h5>
            <audio controls src={props.song.preview_url}></audio>
        </div>
    );
};

export default componentName;