<script lang="ts">
import { defineComponent } from "vue";
import TodoListItem from "./TodoListItem.vue";

export default defineComponent({
  components: {
    TodoListItem,
  },
  props: {
    todos: {
      type: Array<{ id: number; text: string; done: boolean }>,
      required: true,
    },
    onRemove: {
      type: Function,
      required: true,
    },
    update: {
      type: Function,
      required: true,
    },
  },
});
</script>

<template>
  <div class="TodoList">
    <TodoListItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      :onRemove="onRemove"
      :update="update"
    />
  </div>
</template>

<style scoped>
.TodoList {
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
}
</style>
