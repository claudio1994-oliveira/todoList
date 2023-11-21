

const todoApp = {
    data() {
        return {
            todos: [
                
            ],
            newTodo: {}
        }
    },
    methods: {
        addTodo: function() {
            if (!this.newTodo.text) {
                return alert("Você precisa digitar algo!");
            }
            this.todos.push(this.newTodo);
            this.newTodo = {};
        },
        removeTodo: function() {
            this.todos = [];
        },
        markAsDone: function(todo) {
            todo.done = !todo.done;
        },
    },
};


Vue.createApp(todoApp).mount('#app');