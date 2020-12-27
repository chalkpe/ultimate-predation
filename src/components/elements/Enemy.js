import Base from './Base'

const Enemy = ({ name, size, ...props }) => {
  return <Base
    {...props}
    as='img'
    alt={name}
    src={`./${name}.png`}
    width={size}
    height={size}
  />
}

export default Enemy