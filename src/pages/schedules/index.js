import { CategoryInput } from "../../Components/CategoryInput";
import { CategoryTag } from "../../Components/CategoryTag";
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
  TagsContainer,
  ContributeContainer,
  TagsInner,
  ActiveLoading,
  LoadingContainer,
} from "./styles";

export const Schedules = () => {
  const { schema, loading } = useContent();

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
        <TagsContainer loading={loading.toString()}>
          {loading ? (
            <LoadingContainer>
              <ActiveLoading>
                <Loading />
              </ActiveLoading>
              <p>Carregando categorias..</p>
            </LoadingContainer>
          ) : (
            <TagsInner>
              {schema["Categoria"].multi_select.options.map((option, index) => {
                return (
                  <CategoryTag
                    key={index}
                    title={option.name}
                    backColor={option.color}
                  />
                );
              })}
            </TagsInner>
          )}
        </TagsContainer>
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
