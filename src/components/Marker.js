import React from 'react'

const codes = {
  'ultima': '026532',
  'attack1': '061301',
  'attack2': '061302',
  'attack3': '061303',
  'attack4': '061304',
  'attack5': '061305',
  'attack6': '061306',
  'attack7': '061307',
  'attack8': '061308',
  'bind1': '061311',
  'bind2': '061312',
  'bind3': '061313',
  'bind4': '061314',
  'bind5': '061315',
  'bind6': '061316',
  'bind7': '061317',
  'bind8': '061318',
  'stop1': '061321',
  'stop2': '061322',
  'stop3': '061323',
  'stop4': '061324',
  'stop5': '061325',
  'stop6': '061326',
  'stop7': '061327',
  'stop8': '061328',
  'square': '061331',
  'circle': '061332',
  'cross': '061333',
  'triangle': '061334',
  'a': '061341',
  'b': '061342',
  'c': '061343',
  '1': '061344',
  '2': '061345',
  '3': '061346',
  'd': '061347',
  '4': '061348',
  'mob1': '061707',
  'mob2': '061708',
  'mob3': '061709',
  'mob4': '061710',
  'mob5': '061711',
  'mob6': '061712',

  'error': '061553'
}

const Marker = ({ name, size, position }) => {
  const id = codes[name] || codes.error

  return <img
    style={{
      width: size,
      height: size,
      ...(position && {
        position: 'absolute',
        left: `calc(50% + ${50 * position.radius * Math.cos((position.deg - 90) * Math.PI / 180)}% - ${size} / 2)`,
        top: `calc(50% + ${50 * position.radius * Math.sin((position.deg - 90) * Math.PI / 180)}% - ${size} / 2)`
      })
    }}
    alt={`Marker ${name.toUpperCase()}`}
    src={`https://xivapi.com/i/${id.substr(0, 3)}000/${id}.png`}
  />
}

export default Marker