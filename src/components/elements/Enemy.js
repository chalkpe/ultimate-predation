import Base from './Base'

const Enemy = ({ name, size, position }) => {
  return <Base
    as='img'
    alt={name}
    src={`./${name}.png`}
    width={size}
    height={size}
    position={position}
  />
}

export default Enemy