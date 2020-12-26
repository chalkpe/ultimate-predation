import styled from 'styled-components'

const Base = styled.div`
  position: absolute;
  user-select: none;
  width: ${props => props.width};
  height: ${props => props.height};
  left: calc(50% + ${props => 50 * props.position.radius * Math.cos((props.position.deg - 90) * Math.PI / 180)}% ${props => props.passLeft ? '' : `- ${props.width} / 2`});
  top: calc(50% + ${props =>50 * props.position.radius * Math.sin((props.position.deg - 90) * Math.PI / 180)}% ${props => props.passTop ? '' : `- ${props.height} / 2`});
  transition: 0.5s ease;
`

export default Base