<script lang="ts">
import { defineComponent } from "vue";
import Plus from "vue-material-design-icons/plus.vue";

export default defineComponent({
  components: { Plus },
  props: {
    onInsert: {
      type: Function,
      required: true,
    },
  },
  methods: {
    onSubmit(e: Event) {
      e.preventDefault();
      this.todo.title.trim();
      this.onInsert(this.todo);
      console.log(this.todo);
      this.todo.title = "";
    },
  },
  data() {
    return {
      todo: { title: "" },
    };
  },
});
</script>

<template>
  <form class="TodoInsert" v-on:submit="onSubmit">
    <input type="text" v-model="todo.title" placeholder="할 일을 입력하세요" />
    <button type="submit"><Plus /></button>
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
