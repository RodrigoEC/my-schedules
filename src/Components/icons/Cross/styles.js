import styled from "styled-components";

export const Wrapper = styled.div`
  background: transparent;

  &.disabled {
    cursor: not-allowed;
    opacity: 0.2;
  }

  &.disabled svg {
    cursor: not-allowed;
  }
`;
