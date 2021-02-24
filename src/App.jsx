import React from 'react'
import './App.css'
import ReactAudioPlayer from 'react-audio-player'
import { IconButton, Grid } from '@material-ui/core'
import StopIcon from '@material-ui/icons/Stop'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      musics: null,
      isPlaying: false,
      autoPlay: true
    }
    this.handlePlay = this.handlePlay.bind(this)
    this.handlePause = this.handlePause.bind(this)
    this.URI =
      'https://ia803209.us.archive.org/10/items/JsonSaSlicicama/classical-music-json.json'
  }

  componentDidMount () {
    this.loadData(this.URI)
  }

  async loadData (uri) {
    const data = await window.fetch(uri).then(res => res.json())
    this.setState({ musics: data })
  }

  handlePause () {
    this.setState({ autoPlay: false })
  }

  handlePlay () {
    this.setState({ autoPlay: true })
  }

  render () {
    if (!this.state.musics) return <div />
    const random = Math.floor(Math.random() * this.state.musics.length)
    const url = this.state.musics[random].url
    const title = this.state.musics[random].title
    const img = this.state.musics[random].image_url
    let button
    if (this.state.autoPlay) {
      button = <PlayArrowIcon onClick={this.handlePlay} />
    } else {
      button = <StopIcon onClick={this.handlePause} />
    }
    return (
      <div class='center'>
        <h1>enjoy classcal music!</h1>
        <ReactAudioPlayer src={url} autoPlay />
        <Grid container direction='row' alignItems='center' class='mui'>
          <IconButton aria-label='Play/pause'>{button}</IconButton>
          <h2>title</h2>
          <p>{title}</p>
          <img src={img} alt='music_image' />
        </Grid>
      </div>
    )
  }
}

// card

export default App
