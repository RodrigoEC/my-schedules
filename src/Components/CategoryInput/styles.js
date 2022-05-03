import styled from "styled-components";
import { Loading } from "../icons/Loading";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.forth}20;

  width: fit-content;
  padding: 6px 8px;
  border-radius: 3px;

  svg {
    width: 20px;
    cursor: pointer;
    transition: 0.2s;
  }

  svg:hover {
    opacity: 0.4;
  }
`;

export const InputColor = styled.div`
  float: left;
  width: 24px;
  height: 24px;
  background: ${({ background }) => background};
  box-sizing: border-box;
  border-radius: 3px;
  border: 2px solid #fff3e9;
  cursor: pointer;

  input[type="color"] {
    opacity: 0;
    display: block;
    width: 24px;
    height: 24px;
    border: none;
    cursor: pointer;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

export const Input = styled.input`
  background: transparent;
  border: none;
  height: 24px;
  color: ${({ theme }) => theme.font};
  transition: 0.2s;
  font-family: "Patrick Hand", cursive;
  margin-left: 0.75rem;
  font-size: 16px;

  &::placeholder {
    color: ${({ theme }) => theme.font};
    opacity: 0.4;
  }

  &:focus {
    border: none;
    outline: unset;
  }
`;

export const ActiveLoading = styled.div`
  animation: spin 2s linear infinite;
  background: transparent;
  opacity: 0.4;
  transition: 0.2s;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    50% {
      transform: rotate(180deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
