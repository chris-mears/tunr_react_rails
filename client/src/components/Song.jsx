import React, { Component } from 'react'
import styled from 'styled-components'


const SongContainer = styled.div `
    border: 1px solid black;
    margin: 20px;
    min-width: 300px;
    box-shadow: 3px 3px 5px grey;

    h5, h6 {
        margin: 10px;
    }
`

class Songs extends Component {
    state = {
        togglePreview: false
    }

    handleToggle = () => {
        this.setState({togglePreview: !this.state.togglePreview})
    }
    render() {
        const album = this.props.song.album
        const albumtrim = album.length > 35 ? album.substring(0, 35) + '...' : album
        console.log(albumtrim)
        return (
            <SongContainer onClick={this.handleToggle}>
            <h5>Song: {this.props.song.title}</h5>
            <h6>Album: {albumtrim}</h6>
            {this.state.togglePreview ? <audio controls src={this.props.song.preview_url}></audio> : ''}
        </SongContainer>
        );
    }
}

export default Songs;
