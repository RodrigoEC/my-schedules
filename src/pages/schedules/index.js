import { CategoryInput } from "../../Components/CategoryInput";
import { CategoryTag } from "../../Components/CategoryTag";
import { Logo } from "../../Components/icons/Logo"
import { Switch } from "../../Components/Switch"
import { useContent } from "../../context/content";
import { Body, Footer, Header, Title, TitleContainer, Wrapper, TagsContainer } from "./styles"

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
                <TagsContainer>
                    {
                        schema['Categoria'].multi_select.options.map((option) => {
                            return <CategoryTag title={option.name} backColor={option.color} />
                        })
                    }
                </TagsContainer>
            </Body>
            <Footer>

            </Footer>
        </Wrapper>
    )
};
