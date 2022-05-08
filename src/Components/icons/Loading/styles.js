import styled from "styled-components";

export const Wrapper = styled.div`
  background: transparent;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: ${({ clickable }) => clickable && '0.4'}
  }
`;
