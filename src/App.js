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
        this.setState({
          newComics: data.comics
        })
      })
  }

  getFutureComics() {
    const futureComicsUrl = 'https://api.shortboxed.com/comics/v1/future'
    fetch(futureComicsUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({
          futureComics: data.comics
        })
      })
  }

  render() {
    const NewComics = this.state.newComics.map(comic => {
      console.log(comic)
      return <ComicBook key={comic.diamond_id} comic={comic} />
    })

    const FutureComics = this.state.futureComics.map(comic => {
      return <ComicBook key={comic.diamond_id} comic={comic} />
    })

    return (
      <div className="App">
        <h1>Bison Hubert</h1>
        {NewComics}
        {FutureComics}
      </div>
    );
  }
}

export default App;
