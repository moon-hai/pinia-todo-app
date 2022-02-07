<template>
  <div>
    <select v-model="filterVal">
      <option :value="0">All</option>
      <option :value="1">Done</option>
      <option :value="2">In progress</option>
    </select>

    <div :class="$style.items">
      <TodoItem v-for="item in todoItems" :key="item.id" :item="item" @removeItem="removeItem" />
    </div>

    <button type="button" @click="addTodoItem">
      New Item
    </button>
  </div>
</template>

<script lang="ts">
import { computed, ref } from 'vue'
import { useTodoItemStore } from './store'
import TodoItem from './TodoItem.vue'

export default {
  components: {
    TodoItem
  },

  setup() {
    const filterVal = ref<number>(0)

    const todoItemStore = useTodoItemStore()
    const todoItems = computed(() => todoItemStore.filteredTodoItems(filterVal.value))

    const addTodoItem = () => {
      todoItemStore.addItem()
    }

    const removeItem = (id: string) => {
      todoItemStore.removeItem(id)
    }

    return {
      filterVal,

      todoItems,
      addTodoItem,
      removeItem
    }
  }
}
</script>

<style lang="postcss" module>
.items {
  display: flex;
  flex-direction: column;
}
</style>
