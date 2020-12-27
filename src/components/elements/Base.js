import styled from 'styled-components'

const rad = deg => (deg - 90) * Math.PI / 180
const cos = deg => Math.cos(rad(deg))
const sin = deg => Math.sin(rad(deg))

const x = p => 50 * p.position.radius * cos(p.position.deg)
const y = p => 50 * p.position.radius * sin(p.position.deg)
const w = p => !p.width || p.passLeft ? '' : `- (${p.width} / 2)`
const h = p => !p.height || p.passTop ? '' : `- (${p.height} / 2)`

const Base = styled.div`
  position: absolute;
  user-select: none;
  opacity: ${p => p.opacity};
  transition: 0.5s ease;
  width: ${p => p.width};
  height: ${p => p.height};
  left: calc(50% + ${x}% ${w});
  top: calc(50% + ${y}% ${h});
`

export default Base