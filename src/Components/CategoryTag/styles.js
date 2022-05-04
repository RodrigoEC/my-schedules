import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0.5rem 1rem;
  background-color: ${({ color }) => color ? color : '#525175'};
  border-radius: 4px;
  min-width: fit-content;

  p {
    background: transparent;
    color: #fff;
  }
`;
