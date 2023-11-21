

const todoApp = {
    data() {
        return {
            todos: [
                
            ],
            newTodo: {done: false}
        }
    },
    methods: {
        addTodo: function() {
            if (!this.newTodo.text) {
                return alert("Você precisa digitar algo!");
            }
            this.todos.push(this.newTodo);
            this.newTodo = {done: false};
            localStorage.setItem('todos', JSON.stringify(this.todos));
        },
        removeTodo: function() {
            this.todos = [];
            localStorage.setItem('todos', JSON.stringify(this.todos));
        },
        markAsDone: function(todo) {
            todo.done = !todo.done;
            localStorage.setItem('todos', JSON.stringify(this.todos));
        },
    },
    created() {
        this.todos = JSON.parse(localStorage.getItem('todos')) || [];
    },
};


Vue.createApp(todoApp).mount('#app');
