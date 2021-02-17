import React from 'react'
import ReactAudioPlayer from 'react-audio-player'
// import QuestionCount from '../components/QuestionCount'
import { Button } from '@material-ui/core'

class Quiz extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      musics: null,
      counter: 0,
      total: 0,
      result: null
    }
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

  handleClick = (answer, random) => {
    const correct = console.log('Correct!')
    const incorrect = console.log('Yor failed..')
    if (answer === this.state.musics[random].title) {
      return correct
    } else {
      return incorrect
    }
  }

  shuffle ([...answers]) {
    for (let i = answers.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[answers[i], answers[j]] = [answers[j], answers[i]]
    }
    return answers
  }

  render () {
    if (!this.state.musics) return <div />
    const random = Math.floor(Math.random() * this.state.musics.length)
    const dummy1 = Math.floor(Math.random() * this.state.musics.length)
    const dummy2 = Math.floor(Math.random() * this.state.musics.length)
    const dummy3 = Math.floor(Math.random() * this.state.musics.length)
    const answers = [random, dummy1, dummy2, dummy3]
    const url = this.state.musics[random].url
    const t0 = this.state.musics[answers[0]].title
    const t1 = this.state.musics[answers[0]].title
    const t2 = this.state.musics[answers[0]].title
    const t3 = this.state.musics[answers[0]].title
    const rd = this.state.musics[random].title
    return (
      <>
        <h1>What is the music?</h1>
        <shuffle {...answers} />
        <ReactAudioPlayer src={url} controls />
        <Button onClick={this.handleClick({ t0, rd })}>
          {this.state.musics[answers[0]].title}
        </Button>
        <Button onClick={this.handleClick({ t1, rd })}>{t1}</Button>
        <Button onClick={this.handleClick({ t2, rd })}>
          {this.state.musics[answers[2]].title}
        </Button>
        <Button onClick={this.handleClick({ t3, rd })}>
          {this.state.musics[answers[3]].title}
        </Button>
      </>
    )
  }
}

// <QuestionCount counter={props.questionId} total={props.questionTotal} />

export default Quiz
