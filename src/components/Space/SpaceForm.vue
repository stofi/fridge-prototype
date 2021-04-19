<template>
  <form autocomplete="off" @submit="emitAdd" class="space-y-2 max-w-xs mt-4 px-4">
    <InputElement name="Name" v-model="name">
      <template v-slot:error v-if="!start && !nameValid">
        Name must not be empty.
      </template>
    </InputElement>
    <SearchSelect
      name="Group"
      v-model="selectedGroup"
      :items="searchGroupsNamed"
      @update:searchValue="updateGroupSearch"
    />
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
import SearchSelect from '../Form/SearchSelect.vue'
import ButtonAdd from '../Button/ButtonAdd.vue'
import useName from '../../compositions/useName'
import useUser from '../../compositions/useUser'
import useGroup from '../../compositions/services/useGroup'

defineEmit(['add'])
const { emit } = useContext()

const selectedGroup = ref({ _id: 0 })
const start = ref(true)
const { user } = useUser()
const { name, nameEmpty, nameValid } = useName()
const { searchLoaded, searchGroups, updateGroupSearch } = useGroup()

const searchGroupsNamed = computed(() =>
  searchGroups.value.map((group) => {
    if (!group.default) return group
    return {
      ...group,
      name:
        group.owner._id === user.value._id
          ? 'Mine'
          : `${group.owner.username}'s`,
    }
  })
)

function emitAdd() {
  if (start.value) {
    start.value = false
  }
  if (!nameValid.value) return
  if (!selectedGroup.value._id) return
  if (selectedGroup.value._id === 0) return
  emit('add', {
    name: name.value,
    group: selectedGroup.value._id,
  })
}
</script>
