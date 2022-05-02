import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100%;

`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
`;

export const Body = styled.main`
    flex-grow: 11;
    margin-top: 4rem;
`;

export const Title = styled.h1`
    font-size: 32px;
    width: fit-content;
    color: ${({ theme }) => theme.third};
    text-transform: uppercase;
    letter-spacing: 4px;
`;

export const TitleContainer = styled.div`
    padding: 0  10px 5px;
    border-bottom: 2px solid ${({ theme }) => theme.third};
    width: fit-content;
    margin: 0 auto;
`;

export const Footer = styled.footer``;
