<template>
    <form @submit.prevent="submitData">
    <div>
        <label>Name</label>
        <input type="text" v-model="enteredName">
    </div>
    <div>
        <label>Email</label>
        <input type="email" v-model="enteredEmail">
    </div>
    <div>
        <label>Phone</label>
        <input type="tel" v-model="enteredPhone">
    </div>
    <div>
        <button>Add Contact</button>
    </div>
    </form>
</template>

<script>
export default{
    emit: ['add-contact'],
    data() {
        return {
            enteredName: '',
            enteredEmail: '',
            enteredPhone: '',
        }
    },
    methods: {
        submitData() {
            this.$emit('add-contact', this.enteredName, this.enteredEmail, this.enteredPhone);
        }
    },
}
</script>
<style scoped>
#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}
#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
