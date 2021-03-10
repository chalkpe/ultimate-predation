import React, { useContext } from 'react'
import { LangContext } from '../../lang'

import styled from 'styled-components'
import { lighten } from 'polished'
import Base from './Base'

const Box = styled(Base)`
  box-sizing: border-box;
  border: 1vmin solid ${props => props.color};
  background-color: ${props => lighten(0.2, props.backgroundColor || props.color)};
`

const AoE = ({ color, name, ...props }) => {
  const source = name.split('_')[0]
  const lang = useContext(LangContext)

  return <Box
    {...props}
    opacity={0.5}
    color={color}
    title={`${lang[source]}: ${lang[name]}`}
  />
}

export default AoE