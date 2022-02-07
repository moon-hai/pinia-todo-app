<template>
  <div :class="$style.item">
    <p>id: {{ item.id }}</p>
    <p>text: {{ item.text }}</p>
    <p>done: {{ item.done }}</p>

    <button type="button" @click="removeItem">
      Remove
    </button>
  </div>
</template>

<script lang="ts">
import { ITodoItem } from './types'

export default {
  props: {
    item: {
      type: Object as () => ITodoItem,
      required: true
    }
  },

  setup(props, { emit }) {
    const todoItem = props.item

    const removeItem = () => {
      emit('removeItem', todoItem.id)
    }

    return {
      removeItem
    }
  }
}
</script>

<style lang="postcss" module>
.item {
  display: flex;
  gap: 24px;
  align-items: center;
}

.item button {
  height: 32px;
}
</style>
