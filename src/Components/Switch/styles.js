import styled from "styled-components";
import { colors } from "../../context/theme";

export const Wrapper = styled.div`
    width: 4rem;
    height: 2rem;
    background: ${({ theme }) => theme.third};
    border-radius: 100px;
    padding: 0.25rem;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    cursor: pointer;
    transition: 0.2s;
`;
    
export const InnerWrapper = styled.div`
    height: 1.5rem;
    width: 1.5rem;
    background: ${colors.lightPink};
    border-radius: 100px;
    transform: translateX(${({ active }) => active ? '2rem' : ''});
    transition: 0.2s;
`;