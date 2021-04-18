<template>
  <form autocomplete="off" @submit="emitAdd" class="space-y-2 max-w-xs mt-4 px-4">
    <InputElement name="Name" v-model="name">
      <template v-slot:error v-if="!start && !nameValid">
        Name must not be empty.
      </template>
    </InputElement>
    <SearchMultiSelect
      name="Users"
      :modelValue="selectedUser"
      @update:modelValue="addUser"
      :items="searchUsers"
      @update:searchValue="updateUserSearch"
    >
      <template #selected>
        <UserList :users="selectedUsers" @remove="removeUser" />
      </template>
      <template #itemLabel="{ item }">
        {{ item.email }}
      </template>
    </SearchMultiSelect>
    <div class="pt-2 flex justify-end">
      <ButtonAdd class="self-end" @click="emitAdd" />
    </div>
  </form>
</template>

<script setup>
import {
  ref,
  reactive,
  defineEmit,
  useContext,
  computed,
  watchEffect,
} from 'vue'
import InputElement from '../Form/InputElement.vue'
import SearchMultiSelect from '../Form/SearchMultiSelect.vue'
import ButtonAdd from '../Button/ButtonAdd.vue'
import UserList from '../UserList.vue'
import useName from '../../compositions/useName'

import useUserService from '../../compositions/services/useUserService'

defineEmit(['add'])
const { emit } = useContext()

const selectedUser = ref({ _id: 0 })
const selectedUsers = ref([])
const start = ref(true)

const { name, nameEmpty, nameValid } = useName()
const { searchLoaded, searchUsers, updateUserSearch, users } = useUserService()

function removeUser(id) {
  selectedUser.value = { _id: 0 }
  selectedUsers.value = selectedUsers.value.filter(({ _id }) => _id !== id)
}
function addUser(user) {
  if (selectedUsers.value.includes(user)) return
  if (user._id === 0) return
  selectedUser.value = user
  selectedUsers.value = [user, ...selectedUsers.value]
}

function emitAdd() {
  if (start.value) {
    start.value = false
  }
  if (!nameValid.value) return
  console.log(selectedUsers.value.map(({_id})=>_id));
  emit('add', {
    name: name.value,
    members: selectedUsers.value.map(({_id})=>_id),
  })
}
</script>
