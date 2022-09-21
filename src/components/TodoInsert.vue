<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  components: {},
});
</script>

<template>
  <form class="TodoInsert">
    <input type="text" placeholder="할 일을 입력하세요" />
    <button type="submit">+</button>
  </form>
</template>

<style scoped>
.TodoInsert {
  display: flex;
  background: #495057;
}

.TodoInsert input {
  flex: 1;
  border: none;
  outline: none;
  padding: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.5;
  color: white;
  background: #495057;
}

.TodoInsert button {
  background: #868e96;
  color: white;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  padding-right: 1rem;
  padding-left: 1rem;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.1s background ease-in;
}

.TodoInsert button:hover {
  background: #adb5bd;
}

.TodoInsert button:active {
  background: #868e96;
}
</style>
