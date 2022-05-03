import { CategoryInput } from "../../Components/CategoryInput";
import { Logo } from "../../Components/icons/Logo"
import { Switch } from "../../Components/Switch"
import { useContent } from "../../context/content";
import { Body, Footer, Header, Title, TitleContainer, Wrapper } from "./styles"

export const Schedules = () => {
    const { schema } = useContent();

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
                <CategoryInput />

                {
                    schema['Categoria'].multi_select.options.map((option) => {
                        return <div>{option.name}</div>
                    })
                }
            </Body>
            <Footer>

            </Footer>
        </Wrapper>
    )
};
