<template>
  <div id="app">
    <section class="todoapp">
      <Header />
    </section>
  </div>
</template>
<script>
import Header from '../header/header.vue';

export default {
  components: {
    Header
  },
  mounted() {
    console.log('Hej!');
  }
};
</script>
