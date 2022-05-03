import { colors } from "../../constantes/notion-colors";
import { Wrapper } from "./styles";

export const CategoryTag = ({ title, backColor }) => {
  return (
    <Wrapper color={colors[backColor]} draggable={true}>
      <p>{title}</p>
    </Wrapper>
  );
};