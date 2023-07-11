const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Learn VueJs',
            courseGoalB: 'Expert in VueJs',
            url : 'https://vuejs.org/'
        }        
    },
    methods: {
        setCourseGoal() {
            const randomNumber = Math.random();
            if(randomNumber < 0.5){
                return this.courseGoalA;
            } else {
                return this.courseGoalB
            }
        }
    },
});

app.mount('#user-goal');