import styled from "styled-components";

export const Wrapper = styled.div`
  background: transparent;
  transition: 0.2s;

  &.disabled {
    cursor: not-allowed;
    opacity: 0.2;
  }

  &.disabled svg {
    cursor: not-allowed;
  }
`;
