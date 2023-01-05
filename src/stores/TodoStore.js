import {defineStore} from 'pinia'

export const useTodoStore = defineStore('TodoStore', {
    state:() => ({
        todos: [
            {id:1 , title: 'To do 1', completed: false},
            {id:2 , title: 'To do 2', completed: true},
            {id:3 , title: 'To do 3', completed: false},
            {id:4 , title: 'To do 4', completed: true},
        ],
        staticNumber: 0

    }),
    actions:{

        addNewPost(todo){
            this.todos.push(todo)
        },
        deleteTodo(id){
            this.todos = this.todos.filter(todo => todo.id !== id)
        },
        changeTodo(id){
            this.todos = this.todos.map(todo => {
                if(todo.id == id){
                    todo.completed = !todo.completed}
                return todo
            })
        },

    },
    getters:{
            allTodos: (state ) => state.todos,
            pendingToodos: (state ) => state.todos.filter(todo => !todo.completed),
            completeTodos: (state ) => state.todos.filter(todo => todo.completed),
            allTodoCount: (state ) => state.todos.length,
            pendingTodoCount: (state ) => state.todos.filter(todo => !todo.completed).length,
            compldetedTodoCount: (state ) => state.todos.filter(todo => todo.completed).length,

    }
});