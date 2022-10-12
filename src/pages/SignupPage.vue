<template>
  <div class="nav">
    <router-link to="/">
      <button class="nav-link-btn">Home</button>
    </router-link>
    <router-link to="/login">
      <button class="nav-link-btn">log-in</button>
    </router-link>
  </div>
  <div class="signup-template">
    <h1>Sign Up</h1>
    <div class="form-input">
      <input type="text" placeholder="이름" />
      <input type="text" placeholder="이메일" />
      <input type="password" placeholder="비밀번호" />
      <input type="password" placeholder="비밀번호 확인" />
    </div>
    <button class="submit-btn">Sign Up</button>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
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

.signup-template {
  width: 512px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 6rem;
  border-radius: 4px;
  overflow: hidden;
}

.signup-template h1 {
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
  display: flex;
  flex-direction: column;
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
  height: 50px;
  border: none;
  background-color: #22b8cf;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  cursor: pointer;
}

.submit-btn:hover {
  background-color: #3bc9db;
}

.nav-link-btn:hover {
  background-color: #ced4da;
}
</style>
