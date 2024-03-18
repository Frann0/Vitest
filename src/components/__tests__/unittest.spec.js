import { describe, it, expect, beforeEach } from 'vitest'

import UserInput from '../userInput.vue'
import { useUserStore } from '../../stores/userStore'
import { setActivePinia, createPinia } from 'pinia'
import { mount } from '@vue/test-utils'

describe('Unit tests', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('Should add a user', () => {
    const userStore = useUserStore()
    userStore.addUser('John Doe')
    expect(userStore.users[1]).toMatchObject({ id: 2, name: 'John Doe' })
  })

  it('Should remove a user', () => {
    const userStore = useUserStore()
    userStore.addUser('John Doe')
    userStore.removeUser(2)
    expect(userStore.users).toHaveLength(1)
  })

  it('Should update a users name', () => {
    const userStore = useUserStore()
    userStore.addUser('John Doe')
    userStore.updateUser(2, 'Jane Doe')
    expect(userStore.users[1]).toMatchObject({ id: 2, name: 'Jane Doe' })
  })
})
