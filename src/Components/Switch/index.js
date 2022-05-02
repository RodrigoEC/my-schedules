import { useTheme } from "../../context/theme";
import { InnerWrapper, Wrapper } from "./styles"

export const Switch = () => {
    const { handleSwitch, isActive } = useTheme();

    return (
        <Wrapper onClick={handleSwitch}>
            <InnerWrapper active={isActive}/>            
        </Wrapper>
    )
}