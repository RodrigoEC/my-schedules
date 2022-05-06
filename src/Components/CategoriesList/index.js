import { useContent } from "../../context/content";
import { CategoryTag } from "../CategoryTag";
import { Loading } from "../icons/Loading";
import {
  ActiveLoading,
  TagsContainer,
  TagsInner,
  LoadingContainer,
} from "./styles";

export const CategoriesList = () => {
  const { schema, loading } = useContent();

  console.log(typeof Boolean(loading.toString()));

  return (
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
  );
};
