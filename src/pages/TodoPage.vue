<script lang="ts">
import { defineComponent, ref } from "vue";
import TodoTemplate from "../components/TodoTemplate.vue";

var todoList = ref([
  {
    id: 1,
    text: "vue3",
    done: true,
  },
  {
    id: 2,
    text: "typescript",
    done: true,
  },
  {
    id: 3,
    text: "vite",
    done: false,
  },
]);

var id = ref(4);

export default defineComponent({
  components: {
    TodoTemplate,
  },
  data() {
    return {
      todoList,
      id,
    };
  },
  methods: {
    onInsert(text: string) {
      const todo = {
        id: this.id++,
        text,
        done: false,
      };
      this.todoList.push(todo);
      //console.log(this.todoList, this.id);
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
</script>

<template>
  <div class="nav">
    <router-link to="/login">
      <button class="login-btn">log-in</button>
    </router-link>
  </div>
  <TodoTemplate
    :todos="todoList"
    :onInsert="onInsert"
    :onRemove="onRemove"
    :onToggle="onToggle"
  />
  <router-view></router-view>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  background: #e9ecef;
}

.nav {
  display: flex;
  justify-content: flex-end;
  margin: 1rem;
}

.login-btn {
  width: 100px;
  height: 30px;
  border: none;
  border-radius: 5px;
  background-color: #e9ecef;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
}

.login-btn:hover {
  background-color: #ced4da;
}
</style>
