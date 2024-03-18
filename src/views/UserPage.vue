<template>
  <div class="UserPage_Container">
    <div class="UserPage_UsersContainer">
      <UserItem v-for="user in userStore.getUsersReverse" :key="user.id" :user="user" />
    </div>
    <UserInput />
  </div>
</template>

<script setup lang="ts">
import UserInput from '@/components/userInput.vue'
import UserItem from '@/components/userItem.vue'
import { useUserStore } from '@/stores/userStore'

const userStore = useUserStore()
console.log(userStore.getUsersReverse)
</script>

<style scoped>
.UserPage_Container {
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 20px;
}
.UserPage_UsersContainer {
  display: flex;
  flex-direction: column;
  padding: 20px;
  flex: 1 0 0;
  overflow-y: auto;
  overflow-x: hidden;
  border-radius: 5px;
  border: 1px solid #ccc;
}
</style>
