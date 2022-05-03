import { useState } from "react";
import { colors } from "../../constantes/notion-colors";
import { useContent } from "../../context/content";
import { updateSchema } from "../../services/notion";
import { getRandomInt } from "../../util/util";
import { Cross } from "../icons/Cross";
import { Loading } from "../icons/Loading";
import { ActiveLoading, Input, InputColor, Wrapper } from "./styles";

export const CategoryInput = () => {
  const [color, setColor] = useState("#FF7878");
  const [category, setCategory] = useState("#FF7878");
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const { schema, getSchemaData } = useContent();

  const handleChange = (e) => {
    const value = e.target.value;
    setCategory(value);
    setDisabled(value !== "" && value !== undefined ? false : true);
  };

  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      handleCreate();
      e.target.value = null;
    }
  };


  const handleCreate = async () => {
    setLoading(true);
    const newElementColor = Object.keys(colors)[getRandomInt(0, 6)];

    schema["Categoria"].multi_select.options.push({ name: category, color: newElementColor });
    
    const body = { Categoria: schema["Categoria"] };
    await updateSchema(body);
    setLoading(false);
    getSchemaData();
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
      <Input placeholder="Ex: monitoria" onChange={handleChange} onKeyDown={handleEnter} />

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
