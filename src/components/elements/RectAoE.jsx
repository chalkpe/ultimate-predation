import styled from 'styled-components'
import AoE from './AoE'

const Rect = styled(AoE)`
  transform-origin: ${props => props.origin};
  transform: ${props => props.rotate && `rotate(${props.rotate})`};
`

const RectAoE = ({ rotate, origin, ...props }) => {
  return <Rect
    {...props}
    rotate={rotate}
    origin={origin}
  />
}

export default RectAoE