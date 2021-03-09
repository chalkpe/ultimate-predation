import styled from 'styled-components'
import { lighten, darken } from 'polished'
import AoE from './AoE'

const Circle = styled(AoE)`
  border-radius: 50%;
`
const Donut = styled(Circle)`
  border-width: ${props => props.thickness};
`

const CircleAoE = ({ size, donut, ...props }) => {
  if (donut) {
    const color = darken(0.5, props.color)
    const backgroundColor = lighten(0.2, props.color)

    return <>
      <Donut
        {...props}
        width={size}
        height={size}
        thickness={`calc(((${size}) - (${donut})) * 0.5)`}
        color={backgroundColor}
        backgroundColor='transparent'
      />
      <Circle
        {...props}
        width={size}
        height={size}
        color={color}
        backgroundColor='transparent'
      />
      <Circle
        {...props}
        width={`calc(${donut} + 2vmin)`}
        height={`calc(${donut} + 2vmin)`}
        color={color}
        backgroundColor='transparent'
      />
    </>
  }
  
  return <Circle
    {...props}
    width={size}
    height={size}
  />
}

export default CircleAoE