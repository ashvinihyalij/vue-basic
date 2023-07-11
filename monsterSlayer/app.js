function getRandomNumber(min, max) {
   return Math.floor(Math.random() * (max - min)) + min; 
}
const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            roundCounter: 0,
            winner: null,
            logMessages: [],
        }
    },
    computed: {
        monsterBarStyles(){
            return {width: this.monsterHealth + '%'};
        },
        playerBarStyles(){
            return {width: this.playerHealth + '%'};
        },
        canUseSpecialAttack(){
            return this.roundCounter % 3 != 0;
        }
    },
    watch: {
        playerHealth(value) {
            if(value <= 0 && this.monsterHealth <= 0) {
                // draw
                this.winner = 'draw';
            } else if(value <= 0) {
                // You Lost
                this.winner = 'monster';
            }
        },
        monsterHealth(value) {
            if(value <= 0 && this.playerHealth <= 0) {
                // draw
                this.winner = 'draw';
            } else if(value <= 0) {
                // You Won
                this.winner = 'player';
            }
        }
    },
    methods: {
        startGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.roundCounter = 0;
            this.winner = null;
            this.addLogMessage = [];
        },
        attackMonster() {
            this.roundCounter++;
            const attackValue = getRandomNumber(5, 12);
            this.monsterHealth -= attackValue;
            this.addLogMessage('player', 'attack', attackValue);
            this.attackPlayer();
        },
        attackPlayer() {
            const attackValue = getRandomNumber(8, 15);
            this.playerHealth -= attackValue;
            this.addLogMessage('monster', 'attack', attackValue);
        },
        specialAttackMonster(){
            this.roundCounter++;
            const attackValue = getRandomNumber(10, 25);
            this.monsterHealth -= attackValue;
            this.addLogMessage('player', 'attack', attackValue);
            this.attackPlayer();
        },
        healPlayer() {
            this.roundCounter++;
            const healValue = getRandomNumber(8, 20);
            if(this.playerHealth + healValue > 100){
                this.playerHealth = 100;
            } else {
                this.playerHealth += healValue;
            }
            this.addLogMessage('player', 'heal', healValue);
            this.attackPlayer();           
        },
        surrendar() {
            this.winner = 'monster';
        },
        addLogMessage(who, what, value) {
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            });
        }
    },
});

app.mount('#game');