
import styled from 'styled-components'
import { lighten } from 'polished'
import Base from './Base'

const Box = styled(Base)`
  box-sizing: border-box;
  border: 1vmin solid ${props => props.color};
  background-color: ${props => lighten(0.2, props.backgroundColor || props.color)};
`

const AoE = ({ color, ...props }) => {
  return <Box
    {...props}
    opacity={0.5}
    color={color}
  />
}

export default AoE