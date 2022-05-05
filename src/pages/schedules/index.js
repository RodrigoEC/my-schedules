import { CategoriesList } from "../../Components/CategoriesList";
import { CategoryInput } from "../../Components/CategoryInput";
import { Github } from "../../Components/icons/Github";
import { Logo } from "../../Components/icons/Logo";
import { Switch } from "../../Components/Switch";
import {
  Body,
  Footer,
  Header,
  Title,
  TitleContainer,
  Wrapper,
  Logout,
  ContributeContainer,
} from "./styles";

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
        <CategoryInput />
        <CategoriesList />
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
