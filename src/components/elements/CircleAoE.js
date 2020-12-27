import styled from 'styled-components'
import AoE from './AoE'

const Circle = styled(AoE)`
  border-radius: 50%;
`

const CircleAoE = ({ size, ...props }) => {
  return <Circle
    {...props}
    width={size}
    height={size}
  />
}

export default CircleAoE