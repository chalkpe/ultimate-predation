import React from 'react'
import styled from 'styled-components'

import Enemy from './elements/Enemy'
import Marker from './elements/Marker'
import RectAoE from './elements/RectAoE'
import CircleAoE from './elements/CircleAoE'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fefefe;
  background-color: #010101;
`

const Circle = styled.div`
  position: relative;
  width: ${props => props.circleSize};
  height: ${props => props.circleSize};
  border: 1vmin solid #888;
  border-radius: 50%;
  box-sizing: border-box;
`

const ButtonGroup = styled.div`
  position: absolute;
  bottom: -4vmin;
  right: -4vmin;
  z-index: 100;
`

const Button = styled.button`
  padding: 5px 16px;
  font-size: 16px;
  cursor: pointer;
  user-select: none;
  border: 1px solid #333;
  border-radius: 6px;
  color: #cdd;
  background-color: #222;
  transition: .2s ease;
  text-transform: capitalize;

  :hover {
    background-color: #333;
    border-color: #899;
  }

  &[disabled] {
    color: #445;
    background-color: #222;
    border-color: #333;
  }

  & + & {
    margin-left: 5px;
  }
`

const langMap = {
  ko: ['리셋', '다음'],
  ja: ['リセット', '次']
}

export default class Ultimacy extends React.Component {
  constructor (props) {
    super(props)

    this.nextProgress = this.nextProgress.bind(this)
    this.placePrimals = this.placePrimals.bind(this)

    this.state = {
      circleSize: props.circleSize || '90vmin',
      markerSize: props.markerSize || '7vmin',
      enemySize: props.enemySize || '10vmin',
      
      garuda: 0,
      ifrit: 0,
      titan: 0,
      ultima: 0,

      progress: 0,
    }
  }

  placePrimals () {
    const cardinals = [0, 90, 180, 270]
    const intercardinals = [45, 135, 225, 315]

    const pick = arr =>
      arr.splice(Math.floor(Math.random() * arr.length), 1)[0]

    this.setState({
      progress: 0,
      titan: pick(cardinals),
      ifrit: pick(intercardinals),
      ultima: pick(intercardinals),
      garuda: pick(intercardinals.slice())
    })
  }

  nextProgress () {
    this.setState((state, props) => ({
      progress: Math.min(state.progress + 1, 2)
    }))
  }

  componentDidMount () {
    this.placePrimals()
  }

  render () {
    const inner = 1 / 3
    const outer = 11 / 12
    const [reset, next] = langMap[navigator.language.slice(0, 2)] || ['reset', 'next']

    const nav = <>
      <ButtonGroup>
        <Button onClick={this.placePrimals}>{reset}</Button>
        <Button onClick={this.nextProgress} disabled={this.state.progress === 2}>{next}</Button>
      </ButtonGroup>
    </>

    const markers = <>
      <Marker
        name='1'
        size={this.state.markerSize}
        position={{deg: -45, radius: outer}}
      />
      <Marker
        name='2'
        size={this.state.markerSize}
        position={{deg: -45, radius: inner}}
      />
      <Marker
        name='3'
        size={this.state.markerSize}
        position={{deg: 0, radius: 0}}
      />
      <Marker
        name='a'
        size={this.state.markerSize}
        position={{deg: 0, radius: inner}}
      />
      <Marker
        name='b'
        size={this.state.markerSize}
        position={{deg: 90, radius: inner}}
      />
      <Marker
        name='c'
        size={this.state.markerSize}
        position={{deg: 180, radius: inner}}
      />
      <Marker
        name='d'
        size={this.state.markerSize}
        position={{deg: 270, radius: inner}}
      />
    </>

    const firstAoEs = this.state.progress === 1 && <>
      <CircleAoE
        // 가루다 - 마녀의 수레바퀴 (내부)
        color={'lightgreen'}
        size={`calc(${this.state.circleSize} * 0.35)`}
        position={{deg: this.state.garuda, radius: inner}}
      />

      <RectAoE
        // 이프리트 - 진홍 회오리 (대각선)
        color={'red'}
        width={`calc(${this.state.circleSize} * 0.4)`}
        height={this.state.circleSize}
        rotate={`${this.state.ifrit}deg`}
        position={{deg: 0, radius: 0}}
      />

      <RectAoE
        // 타이탄 - 산사태 (중앙)
        color={'darkorange'}
        width={this.state.circleSize}
        height={`calc(${this.state.circleSize} / 5.5)`}
        rotate={`calc(${this.state.titan}deg + 90deg)`}
        origin={'left center'}
        passLeft={true}
        position={{deg: this.state.titan, radius: 1}}
      />
      <RectAoE
        // 타이탄 - 산사태 (오른쪽)
        color={'darkorange'}
        width={this.state.circleSize}
        height={`calc(${this.state.circleSize} / 5.5)`}
        rotate={`calc(${this.state.titan}deg + 90deg + 45deg)`}
        origin={'left center'}
        passLeft={true}
        position={{deg: this.state.titan, radius: 1}}
      />
      <RectAoE
        // 타이탄 - 산사태 (왼쪽)
        color={'darkorange'}
        width={this.state.circleSize}
        height={`calc(${this.state.circleSize} / 5.5)`}
        rotate={`calc(${this.state.titan}deg + 90deg - 45deg)`}
        origin={'left center'}
        passLeft={true}
        position={{deg: this.state.titan, radius: 1}}
      />
    </>

    const secondAoEs = this.state.progress === 2 && <>
      <CircleAoE
        // 가루다 - 마녀의 회오리 (도넛)
        color={'lightgreen'}
        size={this.state.circleSize}
        position={{deg: this.state.garuda, radius: inner}}
      />

      <RectAoE
        // 이프리트 - 진홍 회오리 (십자 세로)
        color={'red'}
        width={`calc(${this.state.circleSize} / 4)`}
        height={this.state.circleSize}
        position={{deg: 0, radius: 0}}
      />
      <RectAoE
        // 이프리트 - 진홍 회오리 (십자 가로)
        color={'red'}
        width={this.state.circleSize}
        height={`calc(${this.state.circleSize} / 4)`}
        position={{deg: 0, radius: 0}}
      />

      <RectAoE
        // 타이탄 - 산사태 (2회차 오른쪽)
        color={'darkorange'}
        width={this.state.circleSize}
        height={`calc(${this.state.circleSize} / 5.5)`}
        rotate={`calc(${this.state.titan}deg + 90deg + 22.5deg)`}
        origin={'left center'}
        passLeft={true}
        position={{deg: this.state.titan, radius: 1}}
      />
      <RectAoE
        // 타이탄 - 산사태 (2회차 왼쪽)
        color={'darkorange'}
        width={this.state.circleSize}
        height={`calc(${this.state.circleSize} / 5.5)`}
        rotate={`calc(${this.state.titan}deg + 90deg - 22.5deg)`}
        origin={'left center'}
        passLeft={true}
        position={{deg: this.state.titan, radius: 1}}
      />

      <CircleAoE
        // 알테마 웨폰 - 청린 방출
        color={'indigo'}
        size={`calc(${Math.cos(45 * Math.PI / 180)} * ${this.state.circleSize})`}
        position={{deg: this.state.ultima, radius: 1}}
      />
    </>

    const enemies = <>
      <Enemy
        name='garuda'
        size={this.state.enemySize}
        position={{deg: this.state.garuda, radius: inner}}
      />

      <Enemy
        name='titan'
        size={this.state.enemySize}
        position={{deg: this.state.titan, radius: 1}}
      />

      <Enemy
        name='ifrit'
        size={this.state.enemySize}
        position={{deg: this.state.ifrit + (this.state.progress > 0 && 180), radius: 1}}
      />

      <Enemy
        name='ultima'
        size={this.state.enemySize}
        position={{deg: this.state.ultima, radius: 1}}
      />
    </>

    return (
      <Wrapper>
        <Circle circleSize={this.state.circleSize}>
          {nav}
          {markers}
          {firstAoEs}
          {secondAoEs}
          {enemies}
        </Circle>
      </Wrapper>
    )
  }
}
