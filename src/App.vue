<script lang="ts">
import { defineComponent } from "vue";
import TodoTemplate from "./components/TodoTemplate.vue";

export default defineComponent({
  components: {
    TodoTemplate,
  },
});
</script>

<template>
  <TodoTemplate />
</template>

<style>
body {
  margin: 0;
  padding: 0;
  background: #e9ecef;
}
</style>
