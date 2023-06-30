import styled from 'styled-components'

type props = {
  left: number
  theme: string
}

export const TrackNavBarMobile = styled.div<props>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  top: -25px;
  left: ${props => props.left - 10 + 'px'};
  background-color: ${props => (props.theme == 'light' ? 'white' : 'black')};
  position: absolute;
  z-index: 90;
  transition: left 0.3s linear;

  &:after {
    content: '';
    width: 20px;
    height: 20px;
    background: #1d4ed8;
    position: absolute;
    left: -15px;
    top: 25px;
    border-bottom-right-radius: 20px;
    box-shadow: 6px 5px 0 0 ${props => (props.theme == 'light' ? 'white' : 'black')};
    transform: rotate(270deg);
  }

  &:before {
    content: '';
    width: 20px;
    height: 20px;
    background: #1d4ed8;
    position: absolute;
    right: -15px;
    top: 25px;
    border-bottom-right-radius: 20px;
    box-shadow: 6px 5px 0 0 ${props => (props.theme == 'light' ? 'white' : 'black')};
    transform: rotate(180deg);
  }
`
