import { useState } from "react";
import { colors } from "../../constantes/notion-colors";
import { useContent } from "../../context/content";
import { updateSchema } from "../../services/notion";
import { Close, Wrapper } from "./styles";

export const CategoryTag = ({ title, backColor }) => {
  const [loading, setLoading] = useState(false);
  const { schema, getSchemaData } = useContent();

  const handleDelete = async () => {
    setLoading(true);
    const categoriesList = schema["Categoria"].multi_select.options.filter(
      (category) => {
        return category.name !== title;
      }
    );

    const body = {
      Categoria: { multi_select: { options: categoriesList } },
    };

    await updateSchema(body);
    setLoading(false);
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
