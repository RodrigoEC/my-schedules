import { CategoryInput } from "../../Components/CategoryInput";
import { Logo } from "../../Components/icons/Logo"
import { Switch } from "../../Components/Switch"
import { Body, Footer, Header, Title, TitleContainer, Wrapper } from "./styles"

export const Schedules = () => {
    return (
        <Wrapper>
            <Header>
                <Logo />
                <Switch />
            </Header>
            <Body>
                <TitleContainer>
                    <Title>Categorias</Title>
                </TitleContainer>
                <CategoryInput/> 
            </Body>
            <Footer>

            </Footer>
        </Wrapper>
    )
};
