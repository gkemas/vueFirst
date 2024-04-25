const app = Vue.createApp({
    data(){
        return{
            todoList :[
                {id:1, text: "Vue Fİrst 1Week", completed: false},
                {id:2, text: "Vue Fİrst 2Week", completed: false},
                {id:3, text: "Vue Fİrst 3Week", completed: false},
                {id:4, text: "Vue Fİrst 4Week", completed: false},
                {id:5, text: "Vue Fİrst 5Week", completed: false},
                {id:6, text: "Vue Fİrst 6Week", completed: false},
                {id:7, text: "Vue Fİrst 7Week", completed: false},

            ],
        };
    },
    methods:{
        addTodo(event){
            this.todoList.push({
                text: event.target.value,
                id: new Date().getTime(),
                completed: false
            }
            );
            event.target.value = "";
        },
        removeItem(todoItem){
            this.todoList = this.todoList.filter(todo => todo.id != todoItem.id)
        }
    },
    computed:{
        completedItemCount(){
            return this.todoList.filter(t => t.completed).length
        },
        unCompletedItemCount(){
            return this.todoList.filter(t => !t.completed).length
        },
    }

}).mount("#app");