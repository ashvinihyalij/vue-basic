<template>
    <section>
        <header><h1>My Friends</h1></header>
        <new-friend
            @add-contact="saveContact"
        >

        </new-friend>
        <ul>
            <friend-contact
                v-for="friend in friends"
                :key = "friend.id"
                :id = "friend.id"
                :name = "friend.name"
                :email-address = "friend.email"
                :phone-number = "friend.phone"
                :is-favorite = "friend.isFavorite"
                @toggleFavorite = "toggleFavoriteStatus"
                @deleteFriend = "deleteFriend"
            >
            </friend-contact>
        </ul>
    </section>
</template>
<script>
import NewFriend from './components/NewFriend.vue';
//import FriendContact from './components/FriendContact.vue'
export default {
  components: { NewFriend },
  //components: { FriendContact },
    data() {
        return {
            friends: [
                {
                    id: 'ashvini',
                    name: "Ashvini Chavan",
                    phone: '09198675432',
                    email:'ashvini@test.com',
                    isFavorite: true
                },
                {
                    id: 'saumya',
                    name: "Saumya Hyalij",
                    phone: '9187654389',
                    email:'saumya@test.com',
                    isFavorite: false
                }
            ],
        }
    },
    methods: {
        toggleFavoriteStatus(friendId) {
            const friendIndentifier = this.friends.find(friend => friend.id === friendId);
            friendIndentifier.isFavorite = !friendIndentifier.isFavorite;
        },
        saveContact(name, email, phone) {
            const newContact = {
                id: new Date().toISOString(),
                name,
                phone,
                email,
                isFavorite: false
            }
            this.friends.push(newContact);
        },
        deleteFriend(friendId) {
            this.friends = this.friends.filter( friend => friend.id !== friendId);
        }
    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');
* {
  box-sizing: border-box;
}
html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li,
#app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
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