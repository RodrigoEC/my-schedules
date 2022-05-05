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

export const TagsContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: ${({ loading }) =>
    Boolean(loading) ? "center" : "flex-start"};
  width: 100%;
`;

export const TagsInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  width: calc(100% + 2rem);

  @media (max-width: 550px) {
    overflow: scroll;
    position: absolute;
    flex-wrap: nowrap;
    justify-content: start;
    ::-webkit-scrollbar {
      display: none;
    }

    div.category-tag:last-child {
      margin-right: 2rem;
    }
  }
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

export const ActiveLoading = styled.div`
  animation: spin 1s linear infinite;
  background: transparent;
  transition: 0.2s;
  margin: 0 auto;
  width: fit-content;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    50% {
      transform: rotate(-180deg);
    }

    100% {
      transform: rotate(-360deg);
    }
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-flow: column;
  gap: 0.5rem;
  opacity: 0.5;

  p {
    color: ${({ theme }) => theme.third};
  }
`;
