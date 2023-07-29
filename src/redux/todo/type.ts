export type TypeTodoItem = {
  text: string;
  completed: boolean;
};

export interface ITodoSlice {
  items: TypeTodoItem[];
}


export enum EActiveList {
  ALL = 'all',
  ACTIVE = 'active',
  COMPLETED = 'completed',
}