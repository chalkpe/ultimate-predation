import React from 'react'
import styled from 'styled-components'

import lang from '../lang'
import Button from './ui/Button'
import ButtonGroup from './ui/ButtonGroup'
import MusicPlayer from './ui/MusicPlayer'

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
  padding: 0 calc((100vw - 1000px) / 2);
`

const Circle = styled.div`
  position: relative;
  width: ${props => props.zoneSize};
  height: ${props => props.zoneSize};
  border: 1vmin solid #888;
  border-radius: 50%;
  box-sizing: border-box;
`

export default class Ultimacy extends React.Component {
  state = {
    garuda: 0,
    ifrit: 0,
    titan: 0,
    ultima: 0,
    progress: 0,
  }

  placePrimals = () => {
    const cardinals = [0, 90, 180, 270]
    const intercardinals = [45, 135, 225, 315]

    const pick = arr =>
      arr.splice(Math.floor(Math.random() * arr.length), 1)[0]

    this.setState({
      progress: 0,
      garuda: pick(intercardinals.slice()),
      ifrit: pick(intercardinals),
      titan: pick(cardinals),
      ultima: pick(intercardinals)
    })
  }

  prevProgress = () => {
    this.setState((state, props) => ({
      progress: Math.max(state.progress - 1, 0)
    }))
  }

  nextProgress = () => {
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

    const l = navigator.language.slice(0, 2)
    const {reset, prev, next} = lang[l] || {}

    const nav = <>
      <ButtonGroup>
        <Button onClick={this.placePrimals}>{reset || 'reset'}</Button>
        <Button onClick={this.prevProgress} disabled={this.state.progress === 0}>{prev || 'prev'}</Button>
        <Button onClick={this.nextProgress} disabled={this.state.progress === 2}>{next || 'next'}</Button>
      </ButtonGroup>
      <MusicPlayer url='https://youtu.be/Tv_klDrSwMU?t=67' />
    </>

    const markers = <>
      <Marker
        name='1'
        size={this.props.markerSize}
        position={{deg: -45, radius: outer}}
      />
      <Marker
        name='2'
        size={this.props.markerSize}
        position={{deg: -45, radius: inner}}
      />
      <Marker
        name='3'
        size={this.props.markerSize}
        position={{deg: 0, radius: 0}}
      />
      <Marker
        name='a'
        size={this.props.markerSize}
        position={{deg: 0, radius: inner}}
      />
      <Marker
        name='b'
        size={this.props.markerSize}
        position={{deg: 90, radius: inner}}
      />
      <Marker
        name='c'
        size={this.props.markerSize}
        position={{deg: 180, radius: inner}}
      />
      <Marker
        name='d'
        size={this.props.markerSize}
        position={{deg: 270, radius: inner}}
      />
    </>

    const firstAoEs = this.state.progress === 1 && <>
      <CircleAoE
        // 가루다 - 마녀의 수레바퀴 (내부)
        color={'lightgreen'}
        size={`calc(${this.props.zoneSize} * 0.35)`}
        position={{deg: this.state.garuda, radius: inner}}
      />

      <RectAoE
        // 이프리트 - 진홍 회오리 (대각선)
        color={'red'}
        width={`calc(${this.props.zoneSize} * 0.5)`}
        height={this.props.zoneSize}
        rotate={`${this.state.ifrit}deg`}
        position={{deg: 0, radius: 0}}
      />

      <RectAoE
        // 타이탄 - 산사태 (중앙)
        color={'darkorange'}
        width={this.props.zoneSize}
        height={`calc(${this.props.zoneSize} * 0.175)`}
        rotate={`${this.state.titan + 90}deg`}
        origin={'left center'}
        passLeft={true}
        position={{deg: this.state.titan, radius: 1}}
      />
      <RectAoE
        // 타이탄 - 산사태 (오른쪽)
        color={'darkorange'}
        width={this.props.zoneSize}
        height={`calc(${this.props.zoneSize} * 0.175)`}
        rotate={`${this.state.titan + 135}deg`}
        origin={'left center'}
        passLeft={true}
        position={{deg: this.state.titan, radius: 1}}
      />
      <RectAoE
        // 타이탄 - 산사태 (왼쪽)
        color={'darkorange'}
        width={this.props.zoneSize}
        height={`calc(${this.props.zoneSize} * 0.175)`}
        rotate={`${this.state.titan + 45}deg`}
        origin={'left center'}
        passLeft={true}
        position={{deg: this.state.titan, radius: 1}}
      />
    </>

    const secondAoEs = this.state.progress === 2 && <>
      <CircleAoE
        // 가루다 - 마녀의 회오리 (도넛)
        color={'lightgreen'}
        size={this.props.zoneSize}
        position={{deg: this.state.garuda, radius: inner}}
      />

      <RectAoE
        // 이프리트 - 진홍 회오리 (십자 세로)
        color={'red'}
        width={`calc(${this.props.zoneSize} / 4)`}
        height={this.props.zoneSize}
        position={{deg: 0, radius: 0}}
      />
      <RectAoE
        // 이프리트 - 진홍 회오리 (십자 가로)
        color={'red'}
        width={this.props.zoneSize}
        height={`calc(${this.props.zoneSize} / 4)`}
        position={{deg: 0, radius: 0}}
      />

      <RectAoE
        // 타이탄 - 산사태 (2회차 오른쪽)
        color={'darkorange'}
        width={this.props.zoneSize}
        height={`calc(${this.props.zoneSize} * 0.175)`}
        rotate={`${this.state.titan + 90 + 22.5}deg`}
        origin={'left center'}
        passLeft={true}
        position={{deg: this.state.titan, radius: 1}}
      />
      <RectAoE
        // 타이탄 - 산사태 (2회차 왼쪽)
        color={'darkorange'}
        width={this.props.zoneSize}
        height={`calc(${this.props.zoneSize} * 0.175)`}
        rotate={`${this.state.titan + 90 - 22.5}deg`}
        origin={'left center'}
        passLeft={true}
        position={{deg: this.state.titan, radius: 1}}
      />

      <CircleAoE
        // 알테마 웨폰 - 청린 방출
        color={'indigo'}
        size={`calc(${Math.cos(45 * Math.PI / 180)} * ${this.props.zoneSize})`}
        position={{deg: this.state.ultima, radius: 1}}
      />
    </>

    const enemies = <>
      <Enemy
        name='garuda'
        size={this.props.enemySize}
        position={{deg: this.state.garuda, radius: inner}}
      />

      <Enemy
        name='titan'
        size={this.props.enemySize}
        position={{deg: this.state.titan, radius: 1}}
      />

      <Enemy
        name='ifrit'
        size={this.props.enemySize}
        position={{deg: this.state.ifrit + (this.state.progress > 0 && 180), radius: 1}}
      />

      {this.state.progress > 0 && <Enemy
        // 이프리트 (돌진 이전 위치)
        name='ifrit'
        opacity={0.5}
        size={this.props.enemySize}
        position={{deg: this.state.ifrit, radius: 1}}
      />}

      <Enemy
        name='ultima'
        size={this.props.enemySize}
        position={{deg: this.state.ultima, radius: 1}}
      />
    </>

    return (
      <Wrapper>
        {nav}
        <Circle zoneSize={this.props.zoneSize}>
          {markers}
          {firstAoEs}
          {secondAoEs}
          {enemies}
        </Circle>


      </Wrapper>
    )
  }
}
