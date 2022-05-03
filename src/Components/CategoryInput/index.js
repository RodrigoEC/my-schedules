import { useState } from "react";
import { useContent } from "../../context/content";
import { updateSchema } from "../../services/notion";
import { Cross } from "../icons/Cross";
import { Loading } from "../icons/Loading";
import { ActiveLoading, Input, InputColor, Wrapper } from "./styles";

export const CategoryInput = () => {
  const [color, setColor] = useState("#FF7878");
  const [category, setCategory] = useState("#FF7878");
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const { schema } = useContent();

  const handleChange = (e) => {
    const value = e.target.value;
    setDisabled(value !== "" && value !== undefined ? false : true);

    setCategory(value);
  };

  console.log(schema);
  const handleCreate = async () => {
    setLoading(true);
    const updatedOptions = schema["Categoria"].multi_select.options.map(
      (option) => {
        return { name: option.name, color: option.color };
      }
    );

    updatedOptions.push({ name: category });
    await updateSchema({
      Categoria: { multi_select: { options: updatedOptions, color: color } },
    });
    setLoading(false);
  };

  return (
    <Wrapper>
      <InputColor background={color}>
        <input
          type="color"
          defaultValue={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </InputColor>
      <Input placeholder="Ex: monitoria" onChange={handleChange} />

      {loading ? (
        <ActiveLoading>
          <Loading />
        </ActiveLoading>
      ) : (
        <Cross onClick={handleCreate} className={disabled ? "disabled" : ""} />
      )}
    </Wrapper>
  );
};
