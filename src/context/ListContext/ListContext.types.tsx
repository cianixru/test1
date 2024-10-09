export type ListItem = {
  id: string;
  name: string;
  children: ListItem[];
};

export type ListContextProps = {
  list: ListItem[];
  addItem: (parentId: string, itemName: string) => void;
  removeItem: (id: string) => void;
};

export type ListProviderProps = {
  children: React.ReactNode;
};
