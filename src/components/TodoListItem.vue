<template>
  <div class="TodoListItem">
    <div class="checkbox">
      <input type="checkbox" />
      <div class="text">할 일</div>
    </div>
    <div class="remove">
      <CallMadeIcon />
    </div>
  </div>
</template>

<style scoped>
.TodoListItem {
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.TodoListItem :nth-child(even) {
  background: #f8f9fa;
}

.checkbox {
  cursor: pointer;
  flex: 1;
  display: flex;
  align-items: center;
}

.checkbox input {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  display: inline-block;
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  background: white;
  outline: none;
  cursor: pointer;
  margin-right: 0.5rem;
  transition: 0.1s background ease-in;
}

.checkbox input:hover {
  background: #f1f3f5;
}

.checkbox input:active {
  background: #dee2e6;
}

.checkbox input:checked {
  background: #22b8cf;
  border: 1px solid #22b8cf;
}

.checkbox input:checked::after {
  content: "";
  display: block;
  width: 5px;
  height: 9px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.checkbox .text {
  flex: 1;
  font-size: 1.125rem;
  color: #495057;
}

.remove {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #adb5bd;
  cursor: pointer;
  transition: 0.1s color ease-in;
}

.remove:hover {
  color: #495057;
}

.TodoListItem + .TodoListItem {
  border-top: 1px solid #dee2e6;
}
</style>
