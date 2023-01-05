<template>

    <li>{{todo.title}} <button @click="handleDelete()" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">delete</button><button @click="statusChange()">{{ todo.completed ? 'make pending' : 'make completed'}}</button></li>
</template>

<script>
import {useTodoStore} from "@/stores/TodoStore";
export default {
  name: "singleView",
  props: {
    todo: {
      type: Object
    }

  },
  methods:{
    handleDelete(){
        useTodoStore().deleteTodo(this.todo.id)
      },
    statusChange(){
      useTodoStore().changeTodo(this.todo.id)
    }
  }
}
</script>

<style scoped>

</style>