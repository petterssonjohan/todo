<!-- https://forum.vuejs.org/t/passing-data-back-to-parent/1201 -->
<script>
export default {
  data() {
    return {
      todo: ''
    };
  },
  methods: {
    addTodo() {
      /* $store är tillgänglig här pågrund av att vi satt upp detta i main.js */
      this.$store.dispatch('onCreate', this.todo);
      this.todo = '';
    }
  }
};
</script>
<template>
  <header class="header">
    <h1>Att göra!</h1>
    <input class="new-todo" placeholder="What needs to be done?" v-model="todo" v-on:keyup.enter="addTodo()" />
  </header>
</template>
