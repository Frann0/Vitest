<template>
  <div class="UserItem_Container">
    <input
      type="text"
      v-model="userName"
      class="UserItem_Input"
      @input="(e) => handleUpdateUser(e)"
    />
    <button @click="deleteUser" class="UserItem_Delete">Delete</button>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/userStore'
import { defineProps, ref } from 'vue'

const userStore = useUserStore()

const props = defineProps<{
  user: { id: number; name: string }
}>()

const userName = ref(props.user.name)

const deleteUser = () => {
  userStore.removeUser(props.user.id)
}

const handleUpdateUser = (e: InputEvent) => {
  const target = e.target as HTMLInputElement
  userStore.updateUser(props.user.id, target.value)
  console.log(userStore.getUsersReverse())
}
</script>

<style scoped>
.UserItem_Container {
  display: flex;
  flex-direction: row;
  min-height: 40px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 10px;
  align-items: center;
}
.UserItem_Input {
  flex: 1;
  padding: 5px;
  background: transparent;
  border: none;
  outline: none;
  color: white;
}

.UserItem_Delete {
  padding: 5px 10px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
