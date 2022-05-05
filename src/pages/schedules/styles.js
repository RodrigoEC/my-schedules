import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: inherit;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Body = styled.main`
  flex-grow: 11;
  margin-top: 4rem;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 32px;
  width: fit-content;
  color: ${({ theme }) => theme.third};
  text-transform: uppercase;
  letter-spacing: 4px;

  @media (max-width: 550px) {
    font-size: 24px;
  }
`;

export const TitleContainer = styled.div`
  padding: 0 10px 5px;
  border-bottom: 2px solid ${({ theme }) => theme.third};
  width: fit-content;
  margin: 0 auto;
`;

export const Footer = styled.footer`
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 1rem;
`;

export const ContributeContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 0.5rem;

  p {
    font-size: 12px;
  }

  #github {
    cursor: pointer;
  }

  #github:hover {
    opacity: 0.2;
  }
`;

export const Logout = styled.p`
  color: ${({ theme }) => theme.third};
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    opacity: 0.4;
  }
`;
