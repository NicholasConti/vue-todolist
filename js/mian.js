const {createApp} = Vue;

createApp({
    data(){
        return{
            myTodo: [
                {
                    text: 'todo1',
                    done: true,
                },
                {
                    text: 'todo2',
                    done: false,
                },
                {
                    text: 'todo3',
                    done: false,
                },
                {
                    text: 'todo4',
                    done: false,
                },
                {
                    text: 'todo5',
                    done: false,
                }
            ]
        }
    },
    methods: {

    }
}).mount('#app');