import { createContext, useCallback, useState } from "react";
import {
  ListContextProps,
  ListItem,
  ListProviderProps,
} from "./ListContext.types";

export const ListContext = createContext<ListContextProps | undefined>(
  undefined
);

export const ListProvider = ({ children }: ListProviderProps) => {
  const [list, setList] = useState<ListItem[]>([
    { id: "1", name: "Root", children: [] },
  ]);

  const addItem = useCallback(
    (parentId: string, itemName: string) => {
      const recursiveAdd = (items: ListItem[]): ListItem[] =>
        items.map((item) =>
          item.id === parentId
            ? {
                ...item,
                children: [
                  ...item.children,
                  { id: Date.now().toString(), name: itemName, children: [] },
                ],
              }
            : { ...item, children: recursiveAdd(item.children) }
        );

      setList(recursiveAdd(list));
    },
    [list]
  );

  const removeItem = useCallback(
    (id: string) => {
      const recursiveRemove = (items: ListItem[]): ListItem[] =>
        items
          .map((item) => ({
            ...item,
            children: recursiveRemove(item.children),
          }))
          .filter((item) => item.id !== id);

      if (id === "1") return;

      setList(recursiveRemove(list));
    },
    [list]
  );

  return (
    <ListContext.Provider value={{ list, addItem, removeItem }}>
      {children}
    </ListContext.Provider>
  );
};
