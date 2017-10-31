import React, { Component } from 'react';
import axios from 'axios'
import SongList from './SongList'

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
                <h1>{this.state.artist.name}</h1>
                <h5>Nationality: {this.state.artist.nationality}</h5>
                <img src={this.state.artist.photo_url} alt={this.state.artist.name} />
                <SongList songs={this.state.songs} />
            </div>
        );
    }
}

export default Artist;