<script lang="ts">
import { defineComponent } from "vue";
import TodoInsert from "./TodoInsert.vue";
import TodoList from "./TodoList.vue";

export default defineComponent({
  components: {
    TodoInsert,
    TodoList,
  },
  data() {
    return {
      msg: "Hello World",
    };
  },
});
</script>

<template>
  <div class="TodoTemplate">
    <div class="app-title">일정 관리</div>
    <div class="content"><TodoInsert /></div>
    <TodoList />
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
