import React, { useContext } from 'react'
import { LangContext } from '../../lang'
import codes from '../../codes'
import Base from './Base'

const Marker = ({ name, size, ...props }) => {
  const lang = useContext(LangContext)
  const id = codes[name] || codes.error

  return <Base
    {...props}
    as='img'
    alt={`${lang.marker} ${name.toUpperCase()}`}
    title={name.toUpperCase()}
    src={`https://xivapi.com/i/${id.substr(0, 3)}000/${id}.png`}
    width={size}
    height={size}
  />
}

export default Marker