const {createApp} = Vue;

createApp({
    data(){
        return{
            newTodo:'',
            myTodo: [
                {
                    text: 'Fare la spesa',
                    done: false
                },
                {
                    text: 'Pagare l\'assicurazione',
                    done: false
                },
                {
                    text: 'Studiare Vue',
                    done: false
                },
                {
                    text: 'Anadre in aeroporto',
                    done: false
                },
                {
                    text: 'Prenotare la visita',
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
        },
        //FUNZIONE PER SBARRARE GLI ELEMENTI DELLA LISTA AL CLICK
        changeDone(index, element){
            if(this.myTodo[index].done === false){
                this.myTodo[index].done = true;
            } else {
                this.myTodo[index].done = false;
            }
        }
    }
}).mount('#app');