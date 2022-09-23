import { defineStore } from "pinia";

interface TodoList {
  id: number;
  text: string;
  done: boolean;
}

export const useTodoListStore = defineStore({
  id: "todoListStore",
  state: () => ({
    todoList: [] as TodoList[],
    id: 0 as number,
    text: "" as string,
  }),
  actions: {
    onInsert(text: string) {
      const todo = {
        id: this.id++,
        text,
        done: false,
      };
      this.todoList.push(todo);
    },
    onRemove(id: number) {
      this.todoList = this.todoList.filter((todo) => todo.id !== id);
    },
    onToggle(id: number) {
      const todo = this.todoList.find((todo) => todo.id === id);
      if (todo) {
        todo.done = !todo.done;
      }
    },
  },
});
