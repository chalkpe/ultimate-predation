import React from 'react'
import styled from 'styled-components'
import Marker from './Marker'

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
`

export default class Ultimacy extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      rot: 0,
      circleSize: props.circleSize || '85vmin',
      markerSize: props.markerSize || '7vmin'
    }
  }

  componentDidMount () {
    // setInterval(() => this.setState(state => ({rot: (state.rot + 2) % 360})), 1)
  }

  render () {
    const inner = 1 / 3
    const outer = 11 / 12

    return (
      <Wrapper>
        <Circle circleSize={this.state.circleSize}>
          <Marker
            name='stop1'
            size={this.state.markerSize}
            position={{deg: this.state.rot, radius: 1}}
          />
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
        </Circle>
      </Wrapper>
    )
  }
}

// marker 061340
// mons rank 061700
// uwu 112296