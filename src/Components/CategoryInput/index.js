import { useState } from "react";
import { Cross } from "../icons/Cross";
import { Input, InputColor, Wrapper } from "./styles";

export const CategoryInput = () => {
    const [color, setColor] = useState('#FF7878');
    const [category, setCategory] = useState('#FF7878');

    return (
        <Wrapper>
            <InputColor background={color}>
                <input type="color" defaultValue={color} onChange={(e) => setColor(e.target.value)}/>
            </InputColor>
            <Input placeholder="Ex: monitoria" onChange={(e) => setCategory(e.target.value)}/>
            <Cross />
        </Wrapper>
    )
}