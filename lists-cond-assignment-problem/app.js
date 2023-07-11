const app = Vue.createApp({
    data() {
        return {
            task: '',
            taskList: [],
            show: true
        }
    },
    methods: {
        addTask() {
            this.taskList.push(this.task);
        },
        toggleList() {
            this.show = !this.show
        }
    },
});

app.mount('#assignment');