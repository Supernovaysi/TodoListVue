<script lang="ts">
import { defineComponent } from "vue";
import TodoTemplate from "./components/TodoTemplate.vue";
import TodoInsert from "./components/TodoInsert.vue";

export default defineComponent({
  data() {
    return {
      msg: "Hello World",
    };
  },
  components: {
    TodoTemplate,
    TodoInsert,
  },
});
</script>

<template>
  <TodoTemplate>
    <TodoInsert />
  </TodoTemplate>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  background: #e9ecef;
}
</style>
