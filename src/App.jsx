import Ultimacy from './components/Ultimacy'
import MusicPlayer from './components/MusicPlayer'

function App() {
  return (
    <>
      <Ultimacy
        zoneSize='90vmin'
        markerSize='7vmin'
        enemySize='12vmin'
      />
      <MusicPlayer url='https://youtu.be/Tv_klDrSwMU?t=67' />
    </>
  )
}

export default App