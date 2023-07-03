import styled from 'styled-components'

interface Props {
  top: number
  theme: string
}

export const TrackSideBar = styled.div<Props>`
  margin-left: 10%;
  width: 90%;
  height: 40px;
  background: ${props => (props.theme == 'light' ? 'white' : 'black')};
  position: absolute;
  left: 0;
  top: ${props => props.top - 7 + 'px'};
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  transition: top 0.2s linear !important;
  transition: background 0.3s linear;

  @media (min-width: 768px) {
    margin-left: 20%;
    width: 90%;

    &:after {
      content: '';
      width: 20px;
      height: 20px;
      background: green;
      /* background: #1d4ed8; */
      position: absolute;
      right: 10px;
      top: -20px;
      border-bottom-right-radius: 20px;
      box-shadow: 6px 5px 0 0 red;
    }

    &:before {
      content: '';
      width: 20px;
      height: 20px;
      background: #1d4ed8;
      position: absolute;
      right: 0px;
      bottom: -20px;
      border-top-right-radius: 20px;
      box-shadow: 6px -6px 0 0 red;
    }
  }

  @media (min-width: 1024px) {
    margin-left: 9%;
    width: 95%;

    &:after {
      content: '';
      width: 20px;
      height: 20px;
      background: green;
      /* background: #1d4ed8; */
      position: absolute;
      right: 10px;
      top: -20px;
      border-bottom-right-radius: 20px;
      box-shadow: 6px 5px 0 0 red;
      transition: background 0.3s linear;
    }

    &:before {
      content: '';
      width: 20px;
      height: 20px;
      background: #1d4ed8;
      position: absolute;
      right: 0px;
      bottom: -20px;
      border-top-right-radius: 20px;
      box-shadow: 6px -6px 0 0 red;
      transition: background 0.3s linear;
    }
  }

  &:after {
    transition: background 0.3s linear;
    content: '';
    width: 20px;
    height: 20px;
    background: ${props => (props.theme == 'light' ? '#1d4ed8' : '#1d4ed8')};
    position: absolute;
    right: 9px;
    top: -20px;
    border-bottom-right-radius: 20px;
    box-shadow: 6px 8px 0 0 ${props => (props.theme == 'light' ? 'white' : 'black')};
  }

  &:before {
    transition: background 0.3s linear;
    content: '';
    width: 20px;
    height: 20px;
    background: ${props => (props.theme == 'light' ? '#1d4ed8' : '#1d4ed8')};
    position: absolute;
    right: 9px;
    bottom: -20px;
    border-top-right-radius: 20px;
    box-shadow: 6px -6px 0 0 ${props => (props.theme == 'light' ? 'white' : 'black')};
  }
`
