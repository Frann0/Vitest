import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const users = ref([{ id: 1, name: 'John' }])
  function addUser(name: string) {
    users.value.push({ id: users.value.length + 1, name })
  }

  function removeUser(id: number) {
    users.value = users.value.filter((user) => user.id !== id)
  }

  function updateUser(id: number, name: string) {
    const user = users.value.find((user) => user.id === id)
    if (user) user.name = name
  }

  const getUsersReverse = computed(() => users.value.slice().reverse())

  return { users, addUser, removeUser, updateUser, getUsersReverse }
})
