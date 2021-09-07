const app = Vue.createApp({
    data() {
        return {
            inputGoal:'',
            goalArray:[],
            show:  false,
            inputTask: '',
            Task:[]
        };

    },
    // Execute when property changes
    watch: {

        

    },
    // Executes when called example " {{Yeet}}"
    computed: {


    },
    methods: {
        pushGoal(){
            const that = this;
            this.goalArray.push(this.inputGoal);
            that.inputGoal = '';
        },
        removeGoal(index){
            this.goalArray.splice(index,1);
        },

        pushTask(){
            const that = this;
            this.Task.push(this.inputTask);
            that.inputTask = '';
        },
        removeTask(index){
            this.Task.splice(index,1);
        },
        
    }

});

app.mount('#user-goal');