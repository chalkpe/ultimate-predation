import styled from 'styled-components'
import { lighten } from 'polished'

import Base from './Base'

const Rect = styled(Base)`
  opacity: 0.5;
  box-sizing: border-box;
  border: 1vmin solid ${props => props.color};
  background-color: ${props => lighten(0.2, props.color)};
  transform: ${props => props.rotate && `rotate(${props.rotate})`};
  transform-origin: ${props => props.origin};
`

const AoE = ({ color, position, rotate, origin, ...props }) => {
  return <Rect
    {...props}
    color={color}
    position={position}
    rotate={rotate}
    origin={origin}
  />
}

export default AoE