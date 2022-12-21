import styled from 'styled-components';

const TextBox = styled.textarea`
  padding: 5px 1rem;
  width: auto;
  height: 100%;
  min-height: 2rem;
  border: 1px solid #9cb0b1;
  resize: none;
  background: #e6e4e4;
  border: ${(props) => props.border || '1px solid #82b8b8'};
  width: ${(props) => props.width || 'auto'};
  border-radius: ${(props) => props.borderRadius || '4px'};
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #828282;
  }
`;

export default TextBox;
