
import styled from 'styled-components'
import { lighten } from 'polished'
import Base from './Base'

const AoE = styled(Base)`
  opacity: 0.5;
  box-sizing: border-box;
  border: 1vmin solid ${props => props.color};
  background-color: ${props => lighten(0.2, props.color)};
`

export default AoE