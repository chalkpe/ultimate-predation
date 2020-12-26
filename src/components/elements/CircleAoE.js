import styled from 'styled-components'
import { lighten } from 'polished'

import Base from './Base'

const Circle = styled(Base)`
  opacity: 0.5;
  border-radius: 50%;
  box-sizing: border-box;
  border: 1vmin solid ${props => props.color};
  background-color: ${props => lighten(0.2, props.color)};
`

const AoE = ({ size, color, ...props }) => {
  return <Circle
    {...props}
    color={color}
    width={size}
    height={size}
  />
}

export default AoE