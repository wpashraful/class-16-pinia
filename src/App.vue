<script>
import { RouterLink, RouterView } from 'vue-router'
import TodoPage from "@/views/TodoPage.vue";
import MenuCount from "@/components/menuCount.vue";
export default {
  components: {MenuCount, TodoPage}
}
</script>


<template>
  <menu-count></menu-count>
  <TodoPage></TodoPage>
</template>

<style scoped>
</style>
