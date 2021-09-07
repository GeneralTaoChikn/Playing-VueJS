// Only can be called in javaScript file not HTML
function getRandomValue(min,max){
    return Math.floor(Math.random() * (max-min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null,
            logMessages:[]
        };
    },
    
    computed: {
        monsterBarStyle(){
            if(this.monsterHealth<0){
                return {width: '0%'};
            }
            return {width: this.monsterHealth + '%'};
        },

        playerBarStyle(){
            if(this.playerHealth<0){
                return {width: '0%'};
            }
            return {width: this.playerHealth + '%'}
        },

        mayUseSpcAtk(){
            return this.currentRound % 3 !== 0;
        }

    },
    watch: {
        playerHealth(value){
            if (value<=0 && this.monsterHealth <=0){
                //Draw
                this.winner = "Draw"
            } else if (value <=0) {
                //player Lost
                this.winner = "Monster Won"
            }
        },
        monsterHealth(value){
            if (value<=0 && this.playerHealth <=0){
                //Draw
                this.winner = "Draw"
            } else if (value <=0) {
                //Monster Lost
                this.winner = "Player Won"
            }
        }
    },

    methods: {
        startGame(){
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.winner = null;
            this.currentRound = 0;
            this.logMessages = []
        },
        atkMonster(){
            this.currentRound++;
            const atkValue = getRandomValue(5,12);
            this.monsterHealth -= atkValue;
            this.addLogMessage('player','attack',atkValue);
            this.atkPlayer();
        },

        atkPlayer(){
            const atkValue = getRandomValue(8,15);
            this.playerHealth -= atkValue;
            this.addLogMessage('monster','attack',atkValue);
        },

        spcAtk(){
            this.currentRound++;
            const atkValue = getRandomValue(10,25);
            this.monsterHealth -= atkValue;
            this.addLogMessage('player','special attack',atkValue);
            this.atkPlayer();
            
        },

        heal() {
            this.currentRound++;
            const healValue = getRandomValue(8,20);
            if (this.playerHealth + healValue > 100){
                this.playerHealth = 100;
            }else{
                this.playerHealth += healValue;
            }
            this.atkPlayer();
        },

        surrender() {
            this.winner = "You Suck! Monster Won"
        },

        addLogMessage(who, what, value){
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            });

        }
    }

});

app.mount('#game');