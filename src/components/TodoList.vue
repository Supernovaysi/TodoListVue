<script lang="ts">
import { useTodoListStore } from "@/stores";
import { mapActions, mapState } from "pinia";
import { defineComponent } from "vue";
import TodoListItem from "./TodoListItem.vue";

export default defineComponent({
  components: {
    TodoListItem,
  },
  methods: {
    ...mapActions(useTodoListStore, ["onRemove", "onToggle"]),
  },
  computed: {
    ...mapState(useTodoListStore, ["todoList"]),
  },
});
</script>

<template>
  <div class="TodoList">
    <TodoListItem
      v-for="todo in todoList"
      :key="todo.id"
      :todo="todo"
      :onRemove="onRemove"
      :onToggle="onToggle"
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
