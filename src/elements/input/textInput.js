import styled from 'styled-components';

const TextInput = styled.input.attrs({
  type: 'text',
})`
  padding: 0 1rem;
  font-size: ${(props) => props.fontSize || '16px'};
  font-weight: ${(props) => props.fontWeight || ''};
  color: ${(props) => props.color || '#e6e4e4'};
  height: ${(props) => props.height || 'auto'};
  min-height: 2rem;
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

export default TextInput;
