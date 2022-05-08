import { CategoriesList } from "../../Components/CategoriesList";
import { CategoryInput } from "../../Components/CategoryInput";
import { Github } from "../../Components/icons/Github";
import { Loading } from "../../Components/icons/Loading";
import { Logo } from "../../Components/icons/Logo";
import { Switch } from "../../Components/Switch";
import { useContent } from "../../context/content";
import {
  Body,
  Footer,
  Header,
  Title,
  TitleContainer,
  Wrapper,
  Logout,
  ContributeContainer,
  InputContainer,
} from "./styles";

export const Schedules = () => {
  const { failed, getSchemaData, getListData } = useContent();

  const handleError = () => {
    getSchemaData();
  };

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
        <InputContainer>
          <CategoryInput />
        </InputContainer>
        {failed ? <Loading onClick={handleError} /> : <CategoriesList />}
      </Body>
      <Footer>
        <ContributeContainer>
          <p>Contribute with us</p>
          <a
            href="https://github.com/RodrigoEC/my-schedules"
            target="_blank"
            rel="noreferrer"
          >
            <Github id="github" />
          </a>
        </ContributeContainer>
        <Logout>Logout</Logout>
      </Footer>
    </Wrapper>
  );
};
