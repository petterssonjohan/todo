<template>
  <section class="main">
    <ul class="todo-list">
      <li v-for="(todo, index) in todos" :key="index + '-' + todo">
        <div class="view">
          <label>{{ todo }}</label>
        </div>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  props: ['todos']
};
</script>
