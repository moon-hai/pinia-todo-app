import { defineStore } from 'pinia'
import { uniqueId } from 'lodash'
import { ITodoItem } from './types'

export const useTodoItemStore = defineStore('todoItems', {
  state: (): {
    todoItems: ITodoItem[]
    count: number
  } => ({
    todoItems: [
      {
        id: uniqueId(),
        text: 'Learn Vue',
        done: false
      },
      {
        id: uniqueId(),
        text: 'Learn React',
        done: true
      }
    ],

    count: 0
  }),

  getters: {
    filteredTodoItems: state => (target: number): ITodoItem[] => {
      switch (target) {
        case 1:
          return state.todoItems.filter(todoItem => todoItem.done)
        case 2:
          return state.todoItems.filter(todoItem => !todoItem.done)
        default:
          return state.todoItems
      }
    }
  },

  actions: {
    addItem() {
      this.todoItems.push({
        id: uniqueId(),
        text: 'Anything else...',
        done: false
      })
    },

    removeItem(id: string) {
      this.todoItems = this.todoItems.filter(item => item.id !== id)
    }
  }
})
