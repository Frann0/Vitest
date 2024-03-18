<template>
  <div class="UserInput_Container">
    <input id="UserInput" type="text" v-model="userInput" class="UserInput_Input" />
    <button id="UserButton" @click="submitUserInput" class="UserInput_Submit">Submit</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '@/stores/userStore'

const userStore = useUserStore()
const userInput = ref('')

const submitUserInput = () => {
  if (!userInput.value) return
  userStore.addUser(userInput.value)
  userInput.value = ''
}
</script>

<style scoped>
.UserInput_Container {
  display: flex;
  flex-direction: row;
  min-height: 40px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 10px;
  align-items: center;
}

.UserInput_Input {
  flex: 1;
  padding: 5px;
  background: transparent;
  border: none;
  outline: none;
  color: white;
}

.UserInput_Submit {
  padding: 5px 10px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
