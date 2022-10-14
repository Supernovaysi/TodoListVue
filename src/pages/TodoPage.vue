<script setup lang="ts">
import { onMounted, ref } from "vue";
import TodoTemplate from "../components/TodoTemplate.vue";
import { call } from "../lib/api";

onMounted(() => {
  call("/todo", "GET", null).then((response) => {
    (todoList.value = response.data), (loading.value = false);
  });
});

const todoList = ref([] as any[]);
const loading = ref(true);

function onInsert(item: any) {
  console.log(item);
  call("/todo", "POST", item).then(
    (response) => (todoList.value = response.data),
  );
}
function onRemove(item: any) {
  call("/todo", "DELETE", item).then(
    (response) => (todoList.value = response.data),
  );
}
function update(item: any) {
  call("/todo", "PUT", item).then(
    (response) => (todoList.value = response.data),
  );
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
    :update="update"
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
