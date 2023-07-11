const app = Vue.createApp({
    data() {
        return {
            user: '',
            show: true,
            color: ''
        }
    },
    methods: {
        toggleMe() { 
            this.show = !this.show;
        }    
    },    
});

app.mount('#assignment');