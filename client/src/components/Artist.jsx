import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components';
import SongList from './SongList'

const HeroImage = styled.div `
    width: 100%;

    img {
        width: 80%;
        height: 600px;
        object-fit: cover;
        object-position: 0 0;
    }
`


class Artist extends Component {
    state = {
        artist: {},
        songs: []
    }

    async componentWillMount() {
        try {
            const id = this.props.match.params.artist_id
            const response = await axios.get(`/api/artists/${id}`)
            const artist = response.data.artist
            const songs = response.data.songs 
            this.setState({artist, songs})
        } catch(error) {
            console.log(error)
        }
        
    }
    render() {
        return (
            <div>
                <HeroImage>
                <img src={this.state.artist.photo_url} alt={this.state.artist.name} />
                </HeroImage>
                <h1>{this.state.artist.name}</h1>
                <h5>Nationality: {this.state.artist.nationality}</h5>
                <SongList songs={this.state.songs} />
            </div>
        );
    }
}

export default Artist;