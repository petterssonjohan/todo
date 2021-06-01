<!-- https://forum.vuejs.org/t/passing-data-back-to-parent/1201 -->
<!-- https://vuejs.org/v2/guide/components-props.html -->
<template>
  <div id="app">
    <section class="todoapp">
      <Header />
      <!-- Lägg till List komponent -->
    </section>
  </div>
</template>
<script>
import Header from '../header/header.vue';
/* Lägg till import för en ny .vue fil som kan få heta list.vue och ligga i folder List i components folder. */

export default {
  components: {
    Header
  },
  mounted() {
    console.log('Hej!');
  }
};
/* Det som emittas till denna förälder från Header komponent behöver läggas in någonstans så att den blivande */
/* list komponenten också kommer åt denna. Till exempel kan man göra detta med att ha en array här av todos som */
/* man även skickar in i List komponenten som property. Vuex finns också som alternativ, som är en State Manager. */
/* Ett bra alternativ ifall man vill att komponenter ska kunna prata med varandra som är helt oberoende av varandra  /*
/* (det vill säga inte barn komponenter) eller att man har ytterligare logik som att spara i localStorage eller så. */
</script>
