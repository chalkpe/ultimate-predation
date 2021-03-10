import React, { useContext } from 'react'
import { LangContext } from '../../lang'
import Base from './Base'

const Enemy = ({ name, size, ...props }) => {
  const lang = useContext(LangContext)

  return <Base
    {...props}
    as='img'
    alt={`${lang[name]} (${lang.enemy})`}
    title={lang[name]}
    src={`./${name}.png`}
    width={size}
    height={size}
  />
}

export default Enemy