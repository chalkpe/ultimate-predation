import codes from '../../codes'
import Base from './Base'

const Marker = ({ name, size, position }) => {
  const id = codes[name] || codes.error

  return <Base
    as='img'
    alt={`Marker ${name.toUpperCase()}`}
    src={`https://xivapi.com/i/${id.substr(0, 3)}000/${id}.png`}

    width={size}
    height={size}
    position={position}
  />
}

export default Marker