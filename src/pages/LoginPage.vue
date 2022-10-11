<template>
  <div class="nav">
    <router-link to="/">
      <button class="nav-link-btn">Home</button>
    </router-link>
    <router-link to="/signup">
      <button class="nav-link-btn">sign-up</button>
    </router-link>
  </div>
  <div class="login-template">
    <h1>Login</h1>
    <form @submit.prevent="handleSubmit">
      <div class="form-input">
        <input type="text" placeholder="이메일" v-model="username" />
        <input type="password" placeholder="비밀번호" v-model="password" />
      </div>
      <button class="submit-btn" type="submit">Login</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { signin } from "@/lib/api";
import { ref } from "vue";

const username = ref("");
const password = ref("");

function handleSubmit(e: Event) {
  e.preventDefault();
  const data = new FormData(e.target as HTMLFormElement);
  const email = data.get("email");
  const password = data.get("password");
  signin({ email: email, password: password });
}
</script>

<style scoped>
.login-template {
  width: 512px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 6rem;
  border-radius: 4px;
  overflow: hidden;
}

.nav {
  display: flex;
  justify-content: flex-end;
  margin: 1rem;
}

.nav-link-btn {
  width: 100px;
  height: 30px;
  border: none;
  border-radius: 5px;
  background-color: #e9ecef;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
}

.nav-link-btn:hover {
  background-color: #ced4da;
}

.login-template h1 {
  padding: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.5;
  background: #22b8cf;
  color: white;
  margin: 0;
}

.form-input {
  padding: 1rem;
  background: #f8f9fa;
}

.form-input input {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  outline: none;
  box-sizing: border-box;
  margin: 0.5rem 0;
}

.submit-btn {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.5;
  color: #495057;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  outline: none;
  background: #22b8cf;
  color: white;
  cursor: pointer;
}

.submit-btn:hover {
  background: #3bc9db;
}
</style>
