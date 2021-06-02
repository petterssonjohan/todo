import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['todos'])
  },
  watch: {
    todos(value) {
      if (value.length < 5) return;
      this.$toast.success({
        title: 'Behöver du hjälp?',
        message: 'Du verkar ha mycket att göra. Behöver du hjälp?'
      });
    }
  }
};
