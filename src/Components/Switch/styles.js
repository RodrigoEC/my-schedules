import styled from "styled-components";

export const Wrapper = styled.div`
    width: 3.5rem;
    height: 1.75rem;
    background: ${({ theme }) => theme.third};
    border-radius: 100px;
    padding: 0.25rem;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    cursor: pointer;
    transition: 0.2s;

    @media (max-width: 550px) {
        width: 3rem;
        height: 1.5rem;
    }
`;
    
export const InnerWrapper = styled.div`
    height: 1.25rem;
    width: 1.25rem;
    background: ${({ theme }) => theme.primary};
    opacity: 0.8;
    border-radius: 100px;
    transform: translateX(${({ active }) => active ? '1.7rem' : ''});
    transition: 0.2s;

    @media (max-width: 550px) {
        height: 1rem;
        width: 1rem;
        transform: translateX(${({ active }) => active ? '1.5rem' : ''});
    }
`;