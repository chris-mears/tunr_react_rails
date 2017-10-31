import React, { Component } from 'react';

class Songs extends Component {
    state = {
        togglePreview: false
    }

    handleToggle = () => {
        this.setState({togglePreview: !this.state.togglePreview})
    }
    render() {
        return (
            <div>
            <h4 onClick={this.handleToggle}>{this.props.song.title}</h4>
            {this.state.togglePreview ? <audio controls src={this.props.song.preview_url}></audio> : ''}
        </div>
        );
    }
}

export default Songs;
