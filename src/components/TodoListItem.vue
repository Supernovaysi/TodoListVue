<script lang="ts">
import { defineComponent } from "vue";
import DeleteForever from "vue-material-design-icons/DeleteForever.vue";
import CheckBoxBlankOutline from "vue-material-design-icons/CheckBoxBlankOutline.vue";
import CheckBoxOutline from "vue-material-design-icons/CheckBoxOutline.vue";

export default defineComponent({
  components: { DeleteForever, CheckBoxBlankOutline, CheckBoxOutline },
  props: {
    todo: {
      type: Object,
      required: true,
    },
    onRemove: {
      type: Function,
      required: true,
    },
    onToggle: {
      type: Function,
      required: true,
    },
    handleEdit: {
      type: Function,
      required: true,
    },
  },
  methods: {
    editTodo(todo: any) {
      let caches = todo.text;
      const newTodo = prompt("Edit Todo", todo.text);
      if (newTodo) {
        todo.text = newTodo;
        this.handleEdit(todo.id, newTodo);
      } else {
        todo.text = caches;
      }
    },
  },
});
</script>

<template>
  <div class="TodoListItem">
    <div class="checkbox">
      <div v-if="todo.done" class="done" @click="onToggle(todo.id)">
        <CheckBoxOutline />
      </div>
      <div v-else class="undone" @click="onToggle(todo.id)">
        <CheckBoxBlankOutline />
      </div>
      <!--
      <input type="checkbox" :checked="todo.done" @click="onToggle(todo.id)" />
      -->
      <div
        class="text"
        :class="{ checked: todo.done }"
        @dblclick="editTodo(todo)"
      >
        {{ todo.text }}
      </div>
    </div>
    <div class="remove" @click="() => onRemove(todo.id)">
      <DeleteForever />
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
.TodoListItem:nth-of-type(even) {
  background: #f8f9fa;
}

.TodoListItem .checkbox {
  cursor: pointer;
  flex: 1;
  display: flex;
  align-items: center;
}

.TodoListItem .checkbox .text {
  margin-left: 0.5rem;
  flex: 1;
}

.TodoListItem .text.checked {
  color: #adb5bd;
  text-decoration: line-through;
}

.checkbox {
  cursor: pointer;
  flex: 1;
  display: flex;
  align-items: center;
}

.checkbox .done {
  color: #20c997;
}

.checkbox .done:hover {
  color: #12a176;
}

.checkbox .undone {
  color: #adb5bd;
}

.checkbox .undone:hover {
  color: #77828d;
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

.remove:active {
  color: #adb5bd;
}

.TodoListItem + .TodoListItem {
  border-top: 1px solid #dee2e6;
}
</style>
