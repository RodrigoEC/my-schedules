import { useState } from "react";
import { colors } from "../../constantes/notion-colors";
import { useContent } from "../../context/content";
import { updateSchema } from "../../services/notion";
import { Close, Wrapper } from "./styles";

export const CategoryTag = ({ title, backColor }) => {
  const { schema, getSchemaData, setLoadingSchema } = useContent();

  const handleDelete = async () => {
    setLoadingSchema(true);
    const categoriesList = schema["Categoria"].multi_select.options.filter(
      (category) => {
        return category.name !== title;
      }
    );

    schema["Categoria"].multi_select.options = categoriesList;

    await updateSchema({ Categoria: schema["Categoria"]});
    getSchemaData();
  };

  return (
    <Wrapper
      color={colors[backColor]}
      draggable={true}
      className="category-tag"
    >
      <p>{title}</p>
      <Close
        onClick={handleDelete}
        color={colors[backColor]}
        className="close"
      />
    </Wrapper>
  );
};
