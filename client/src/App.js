import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios'
import './App.css'
import NavBar from './components/NavBar'
import ArtistList from './components/ArtistList'
import Artist from './components/Artist'


class App extends Component {
  state = {
    artists: []
  }

  async componentWillMount() {
    
    try {
      const response = await axios.get('/api/artists')
      const artists = response.data
      this.setState({artists})
    }catch(error) {
      console.log(error)
    }

  }
  render() {

    const ArtistListComponent = () => (<ArtistList artists={this.state.artists} />)
    return (
      <Router>
      <div className="App">
          <h1>Tunr</h1>
          <NavBar />

          <Switch>
            <Route exact path='/' render={ArtistListComponent} />
            <Route exact path='/artists/:artist_id' component={Artist} />
          </Switch>

      </div>
      </Router>
    )
  }
}

export default App
