import styled from "styled-components";

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
  margin-left: 2rem;
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
