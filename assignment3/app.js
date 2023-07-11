const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    }
  },
  watch: {
    result(newValue, oldValue) {
      if (newValue != oldValue) {
        const that = this;
        setTimeout(function() {
          that.counter = 0;
        }, 2000)
      }
    }
  },
  computed: {
    result() {
      if (this.counter < 37) {
        return 'Not yet there';
      } else if (this.counter === 37) {
        return this.counter;
      } else {
        return 'Too large';
      }
    }
  },
  methods: {
    add(num) {
      this.counter += num;
    }
  },
});

app.mount('#events');
