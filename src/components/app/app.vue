<template>
  <div id="app">
    <section class="todoapp">
      <Header @add="addTodo" />
      <List :todos="todos" />
    </section>
  </div>
</template>
<script>
import Header from '../header/header.vue';
import List from '../list/list.vue';

export default {
  data: () => ({
    todos: []
  }),
  components: {
    Header,
    List
  },
  methods: {
    addTodo(item) {
      this.todos.push(item);
    }
  }
};
</script>
