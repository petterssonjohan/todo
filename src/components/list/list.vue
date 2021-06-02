<template>
  <section class="main">
    <ul class="todo-list">
      <li v-for="(todo, index) in visibleTodos" :key="index + '-' + todo">
        <div class="view">
          <label>{{ todo }}</label>
        </div>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  props: ['todos'],
  /* Computed Properties kan reagera på ändringar i flertalet egenskaper.
  Exempevis om du har för och efternamn i en komponent.
  Du skulle kunna ha en Computed Property som sammanforgar dessa två egenskaper  */
  /* Här nedan använder vi en Computed Property för att hämta todos från getter i Vuex Store.  */
  computed: {
    visibleTodos() {
      return this.$store.getters.visibleTodos;
    }
  }
};
</script>
