<!-- https://forum.vuejs.org/t/passing-data-back-to-parent/1201 -->
<!-- https://vuejs.org/v2/guide/components-props.html -->
<template>
  <div id="app">
    <section class="todoapp">
      <Header @add="addTodo" />
      <!-- Lägg till List komponent -->
      <List :todos="todos" />
    </section>
  </div>
</template>
<script>
import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css';
import Header from '../header/header.vue';
/* Lägg till import för en ny .vue fil som kan få heta list.vue och ligga i folder List i components folder. */
import List from '../list/list.vue';

export default {
  data: () => ({
    todos: []
  }),
  components: {
    Header,
    List
  },
  watch: {
    todos(newValue) {
      if (newValue.length < 5) return;
      this.$toast.success({
        title: 'Behöver du hjälp?',
        message: 'Du verkar ha mycket att göra. Behöver du hjälp?'
      });
    }
  },
  methods: {
    addTodo(item) {
      this.todos.push(item);
    }
  }
};
/* Det som emittas till denna förälder från Header komponent behöver läggas in någonstans så att den blivande */
/* list komponenten också kommer åt denna. Till exempel kan man göra detta med att ha en array här av todos som */
/* man även skickar in i List komponenten som property. Vuex finns också som alternativ, som är en State Manager. */
/* Ett bra alternativ ifall man vill att komponenter ska kunna prata med varandra som är helt oberoende av varandra  /*
/* (det vill säga inte barn komponenter) eller att man har ytterligare logik som att spara i localStorage eller så. */
</script>
