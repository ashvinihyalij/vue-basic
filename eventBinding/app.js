const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      //confirmedName: ''
    };
  },
  computed: {
    fullName() {
      if (this.name === '' || this.lastName === '') {
        return '';
      }
      return this.name + ' ' + this.lastName;
    }
  },
  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function() {
          that.counter = 0;  
        }, 2000);        
      }
    }
  },
  methods: {
      add(num) {
        this.counter = this.counter + num;
      },
      subtract(num) {
        this.counter = this.counter - num;
      },
      /*setName(event, lastName) {
        this.name = event.target.value + ' ' + lastName;
      },
      setConfirmedName() {
        this.confirmedName = this.name;
      }*/
  },
});

app.mount('#events');
