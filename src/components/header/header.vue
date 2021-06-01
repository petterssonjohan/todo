<script>
export default {
  data() {
    return {
      name: ''
    };
  },
  methods: {
    addTodo() {
      this.$emit('add', this.name);
      this.name = '';
    }
  }
};
</script>
<template>
  <header class="header">
    <h1>Att göra!</h1>
    <input class="new-todo" placeholder="What needs to be done?" v-model="name" v-on:keyup.enter="addTodo()" />
  </header>
</template>
