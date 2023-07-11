<template>
    <div>
        <form @submit.prevent="submitData">
            <div>
                <label>UserName</label>
                <input type="text" v-model="userName">
            </div>
            <div>
                <label>Age</label>
                <input type="text" v-model="age">
            </div>
            <div>
                <button>Add User</button>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    emits: ['add-user'],
    data() {
        return {
            userName: '',
            age: '',
        }
    },
    methods: {
        submitData() {
            this.$emit('add-user', this.userName, this.age)
        }
    },
}
</script>
