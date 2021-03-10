import React from 'react'
import { LangContext, langs } from './lang'
import Ultimacy from './components/Ultimacy'
import MusicPlayer from './components/MusicPlayer'

class App extends React.Component {
  state = {
    lang: langs[navigator.language.slice(0, 2)] || langs['en'],
  }

  setLang = lang => this.setState({ lang })

  componentDidMount () {
    document.title = this.state.lang.title
  }

  render () {
    return (
      <LangContext.Provider value={this.state.lang}>
        <Ultimacy
          zoneSize='90vmin'
          markerSize='7vmin'
          enemySize='12vmin'
        />
        <MusicPlayer url='https://youtu.be/Tv_klDrSwMU?t=67' />
      </LangContext.Provider>
    )
  }
}

export default App