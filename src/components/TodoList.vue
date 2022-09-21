<script lang="ts">
import { defineComponent } from "vue";
import TodoListItem from "./TodoListItem.vue";

export default defineComponent({
  components: {
    TodoListItem,
  },
});
</script>

<template>
  <div class="TodoList">
    <TodoListItem />
    <TodoListItem />
    <TodoListItem />
  </div>
</template>

<style scoped>
.TodoList {
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
}
</style>
