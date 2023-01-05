<template>

    <div class="flex">
      <div class="mx-20">
        <button class="btn btn-blue " @click="addNewPost">Add new</button>
        <h1>All Todos</h1>
        <ul>
          <single-view
              v-for="todo in todos"
              :todo="todo"
              :key="todo.id"
          />
        </ul>
      </div>

      <div class="mx-20">
        <h1>completed Todos</h1>
        <ul>
          <single-view
              v-for="todo in completed"
              :todo="todo"
              :key="todo.id"
          />
        </ul>
      </div>

      <div class="mx-20">
        <h1>uncompleted Todos</h1>
        <ul>
          <single-view
              v-for="todo in pendingToodos"
              :todo="todo"
              :key="todo.id"
          />
        </ul>
      </div>

    </div>




  <p v-for="prod in onSale">{{ prod.cars }}</p>
</template>

<script>
import {useTodoStore} from "@/stores/TodoStore";
import {mapState} from "pinia";
import singleView from "@/components/singleView.vue";

export default {
  name: "TodoPage",
  components: {singleView},
  data(){
    return{
      onSale: [
          {cars: 'blue', pots: 0},
          {cars: 'green', pots: 1},
          {cars: 'red', pots: 4},
      ]
    }


  },
  methods: {
    addNewPost(){

      const lastTodo = this.todos[this.todos.length - 1];
      const completed = lastTodo.completed;
      const newCompleted = !completed;
       useTodoStore().addNewPost({

          id: this.todos.length +1,
         // id: statenumber + 1,
         // id: Math.random()*1000,
         title: 'To do ' + (this.todos.length+1),
         completed: newCompleted

       })
    }

  },
  computed: {
    ...mapState(useTodoStore, {
      todos:'allTodos',
      completed: 'completeTodos',
      pendingToodos: 'pendingToodos'
    } ),

  }
}

</script>

<style scoped>

</style>