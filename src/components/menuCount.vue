<template>
<div class="mt-5">all count {{allcount}} | pending count {{pendcount }} | completed {{completCount}} </div>
</template>

<script>
import {useTodoStore} from "@/stores/TodoStore";
import {mapState} from "pinia";
export default {
  name: "menuCount",
  computed: {
    ...mapState(useTodoStore, {
      allcount:'allTodoCount',
      pendcount: 'pendingTodoCount',
      completCount: 'compldetedTodoCount'
    } ),

  }
}
</script>

<style scoped>

</style>