const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Go Twin Charge Boost',
            aboutBoost: 'https://boost.com',
            name: 'chris',
            name2: '',
            age: 23+5 ,
            img: 'https://timesofindia.indiatimes.com/photo/67586673.cms',
            buttonCounter: 0,
            RESULT: ''
        }
    },
    // Execute when property changes
    watch: {
        buttonCounter(value){
            // if (value > 4)
            //     this.buttonCounter = 0;
            const that = this;
            setTimeout(function(){
                that.buttonCounter =0;
            }, 5000)

            if(this.buttonCounter < 37) {
                this.RESULT = "Not there yet";
            }
            else if(this.buttonCounter == 37) {
                const that = this;
            }
            else if (this.buttonCounter > 37) {
                this.RESULT = "Too much!";
            }
        }

    },
    // Executes when called example " {{Yeet}}"
    computed: {
        Yeet(){
            return 'Yeet Yeet!';
        }

    },
    methods: {

        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return 'Learn Vue';
            }
            else {
                return 'master Vue';
            }
        },//end outputGoal

        favNum() {
            const ranNum = Math.random();
            return ranNum;
        },
        
        reset() {
            this.buttonCounter = 0;
        },

        resetTo(num) {
            this.buttonCounter = num;
            this.name2 = ' ';
        },

        alertUser() {
            alert("Hello User!");
        },

        setName2(event, name2){
            this.name2 = event.target.value;
        }
        
    }

});

app.mount('#user-goal');