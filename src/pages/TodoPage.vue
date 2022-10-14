<script setup lang="ts">
import { onMounted, ref } from "vue";
import TodoTemplate from "../components/TodoTemplate.vue";

onMounted(() => {
  const requestOprions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch("http://localhost:8080/todos", requestOprions)
    .then((response) => response.json())
    .then((data) => {
      todoList.value = data;
    })
    .catch((e) => {
      error.value = e;
    });
});

const todoList = ref([
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

const id = ref(4);
const error = ref("");

function onInsert(text: string) {
  const todo = {
    id: id.value++,
    text,
    done: false,
  };
  todoList.value.push(todo);
  //console.log(this.todoList, this.id);
}
function onRemove(id: number) {
  todoList.value = todoList.value.filter((todo) => todo.id !== id);
}
function onToggle(id: number) {
  const todo = todoList.value.find((todo) => todo.id === id);
  if (todo) {
    todo.done = !todo.done;
  }
}
function handleEdit(id: number, text: string) {
  const todo = todoList.value.find((todo) => todo.id === id);
  if (todo) {
    todo.text = text;
  }
}
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
    :handleEdit="handleEdit"
  />
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
