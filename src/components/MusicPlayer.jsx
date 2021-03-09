import ReactPlayer from 'react-player/youtube'

const MusicPlayer = ({ ...props }) => {
  return <ReactPlayer
    {...props}

    loop={true}
    controls={true}

    width='160px'
    height='90px'
    style={{
      opacity: 0.5,
      top: '2vmin',
      left: '2vmin',
      position: 'absolute',
    }}
  />
}

export default MusicPlayer