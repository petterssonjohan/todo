<!-- https://forum.vuejs.org/t/passing-data-back-to-parent/1201 -->
<!-- https://vuejs.org/v2/guide/components-props.html -->
<template>
  <div id="app">
    <section class="todoapp">
      <!-- Tar bort event från Header och Property från List. Detta skall hanteras i Vuex istället.  -->
      <Header />
      <List />
    </section>
  </div>
</template>
<script>
import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css';
import Header from '../header/header.vue';
import List from '../list/list.vue';
import toastMixin from '../../mixins/toastMixin';

export default {
  components: {
    Header,
    List
  },
  mixins: [toastMixin]
};
</script>
