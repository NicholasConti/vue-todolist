const {createApp} = Vue;

createApp({
    data(){
        return{
            newTodo:'',
            myTodo: [
                {
                    text: 'todo1',
                    done: true
                },
                {
                    text: 'todo2',
                    done: false
                },
                {
                    text: 'todo3',
                    done: false
                },
                {
                    text: 'todo4',
                    done: false
                },
                {
                    text: 'todo5',
                    done: false
                }
            ]
        }
    },
    methods: {
        // FUNZIONE PER ELIMINARE GLI ELEMENTI DELLA LISTA AL CLICK DEL CESTINO
        deleteTodo(indexTodo){
            this.myTodo.splice(indexTodo, 1);
        },
        // FUNZIONE PER AGGIUNGERE UN ELEMENTO ALLA LISTA
        addTodo(){
            if(this.newTodo.length > 0){
                this.newObject = {
                    text: this.newTodo,
                    done: false
                }
                this.myTodo.push(this.newObject);
                this.newTodo = '';
            }
        }
    }
}).mount('#app');