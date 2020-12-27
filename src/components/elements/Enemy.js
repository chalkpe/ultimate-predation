import lang from '../../lang'
import Base from './Base'

const Enemy = ({ name, size, ...props }) => {
  return <Base
    {...props}
    as='img'
    alt={`${lang(name)} (${lang('enemy')})`}
    title={lang(name)}
    src={`./${name}.png`}
    width={size}
    height={size}
  />
}

export default Enemy