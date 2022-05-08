import styled from "styled-components";
import { Close as DefaultClose } from "../icons/Close";

export const Wrapper = styled.div`
  padding: 0.5rem 1rem;
  background-color: ${({ color }) => (color ? color : "#525175")};
  border-radius: 4px;
  position: relative;

  p {
    background: transparent;
    color: #fff;
    white-space: nowrap;
    transition: 0.2s;
  }

  .close {
    display: none;
  }

  &:hover .close{
    display: block;
  }

  &:hover {
    display: block;
    background-color: ${({ color }) => (color ? color + '50' : "#52517550")};

    p {
      color: ${({ theme }) => (theme.font + '50')};
    }
  }
`;

export const Close = styled(DefaultClose)`
  position: absolute;
  bottom: 0.5rem;
  right: 42%;
  cursor: pointer;


  svg {
    transition: 0.2s;
  }

  &:hover svg {
    opacity: 0.5;
  }
`;
