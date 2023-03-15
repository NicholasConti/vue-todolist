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
        // FUNZIONE PER ELIMINARE GLI ELEMENTI DELLA LISTA AL CLICK DEL CESTINO
        deleteTodo(indexTodo){
            this.myTodo.splice(indexTodo, 1);
        }
    }
}).mount('#app');