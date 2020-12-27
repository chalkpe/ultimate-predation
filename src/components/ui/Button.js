import styled from 'styled-components'
import lang from '../../lang'

const Btn = styled.button`
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

const Button = ({ name, ...props }) => {
  return <Btn {...props}>{lang(name) || name}</Btn>
}

export default Button