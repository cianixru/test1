import { useState } from "react";

import { useList } from "../../hooks";
import { Flex } from "../Flex";
import type { ListItem } from "../../context/ListContext";

import * as S from "./NestedList.styled";

export const NestedList = () => {
  const { list, addItem, removeItem } = useList();
  const [inputValue, setInputValue] = useState("");

  const renderList = (items: ListItem[]) =>
    items.map(({ id, name, children }) => (
      <S.ListItem
        key={id}
        bg="background"
        color="text"
        marginLeft={id !== "1" ? "20px" : 0}
      >
        {name && <Flex pb={1}>{name}</Flex>}
        <Flex>
          <button onClick={() => addItem(id, inputValue)}>
            + Добавить вложение
          </button>
          {id !== "1" && (
            <button onClick={() => removeItem(id)}>x Удалить</button>
          )}
        </Flex>

        {renderList(children)}
      </S.ListItem>
    ));

  return (
    <Flex flexDirection="column">
      <Flex>
        <S.Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Введите название для нового элемента"
        />
      </Flex>
      <Flex>{renderList(list)}</Flex>
    </Flex>
  );
};
