import React, { Component } from 'react'
import './App.css'
import ComicBook from './components/comic-calendar/ComicBook'

class App extends Component {
  constructor() {
    super()
    this.state = {
      newComics: [],
      futureComics: []
    }
  }

  componentDidMount() {
    this.getNewComics()
    this.getFutureComics()
  }

  getNewComics() {
    const newComicsUrl = 'https://api.shortboxed.com/comics/v1/new'
    fetch(newComicsUrl)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({
          newComics: data
        })
      })
  }

  getFutureComics() {
    const futureComicsUrl = 'https://api.shortboxed.com/comics/v1/future'
    fetch(futureComicsUrl)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({
          futureComics: data
        })
      })
  }

  render() {
    return (
      <div className="App">
        <h1>Bison Hubert</h1>
        <ComicBook />
      </div>
    );
  }
}

export default App;
