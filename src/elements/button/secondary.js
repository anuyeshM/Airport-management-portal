import styled from 'styled-components';
import PlusIcon from '../../assets/images/plus.png';

const PrimaryButton = styled.button`
  height: 2rem;
  font-weight: 600;
  background-color: #8e8e8e;
  display: flex;
  flex-direction: row;
  border: none;
  cursor: pointer;
  border-radius: 4pt;
  font-size: 14px;
  align-items: center;
  justify-content: space-between;
  padding: 0 10pt;
  font-size: ${(props) => props.fontSize || '14px'};
  color: ${(props) => props.fontColor || '#fff'};

  &:focus {
    outline: none;
  }
`;

export default PrimaryButton;
