<!-- https://forum.vuejs.org/t/passing-data-back-to-parent/1201 -->
<script>
export default {
  data: () => ({
    name: ''
  })
};
/* Vi behöver få till ett event på exempelvis 'Enter' efter att man skrivit något i "input class="'new-todo'" . /*
/* Sedan köra $emit mot förälderns event 'add' och där vi skickar den text man fyllt i som parameter */
</script>
<template>
  <header class="header">
    <h1>Att göra!</h1>
    <input class="new-todo" placeholder="What needs to be done?" />
  </header>
</template>
