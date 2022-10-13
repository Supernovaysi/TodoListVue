<script lang="ts">
import { defineComponent } from "vue";
import TodoInsert from "./TodoInsert.vue";
import TodoList from "./TodoList.vue";

export default defineComponent({
  components: {
    TodoInsert,
    TodoList,
  },
  props: {
    todos: {
      type: Array<{ id: number; text: string; done: boolean }>,
      required: true,
    },
    onInsert: {
      type: Function,
      required: true,
    },
    onRemove: {
      type: Function,
      required: true,
    },
    onToggle: {
      type: Function,
      required: true,
    },
    handleEdit: {
      type: Function,
      required: true,
    },
  },
});
</script>

<template>
  <div class="TodoTemplate">
    <div class="app-title">일정 관리</div>
    <div class="content">
      <TodoInsert :onInsert="onInsert" />
      <TodoList
        :todos="todos"
        :onRemove="onRemove"
        :onToggle="onToggle"
        :handleEdit="handleEdit"
      />
    </div>
  </div>
</template>

<style scoped>
.TodoTemplate {
  width: 512px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 6rem;
  border-radius: 4px;
  overflow: hidden;
}
.app-title {
  background: #22b8cf;
  color: white;
  height: 4rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.content {
  background: white;
}
</style>
