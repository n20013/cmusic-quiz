import React from 'react'
import ReactAudioPlayer from 'react-audio-player'
import { Button } from '@material-ui/core'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { musics: null }
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

  render () {
    if (!this.state.musics) return <div />
    const url = this.state.musics[1].url
    return (
      <>
        <ReactAudioPlayer src={url} controls />
        <Button>play</Button>
      </>
    )
  }
}

export default App
