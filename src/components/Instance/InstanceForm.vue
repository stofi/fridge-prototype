<template>
  <form
    autocomplete="off"
    @submit="emitAdd"
    class="space-y-2 max-w-xs mt-4 px-4 flex flex-col-reverse"
  >
    <SearchSelect
      class="order-5"
      name="Group"
      v-model="selectedGroup"
      :items="searchGroups"
      @update:searchValue="updateGroupSearch"
    />
    <SearchSelect
      class="order-4"
      name="Space"
      v-model="selectedSpace"
      :items="filtredSpaces"
      @update:searchValue="updateSpaceSearch"
    />
    <SearchSelect
      class="order-3"
      name="Product"
      v-model="selectedProduct"
      :items="searchProducts"
      @update:searchValue="updateProductSearch"
    />
    <InputElement
      class="order-2"
      :name="selectedProduct.unit ? selectedProduct.unit : 'Quantity'"
      type="text"
      v-model="quantity"
    >
      <template v-slot:error v-if="!start && !quantityValid">
        <span v-if="quantityZero || quantityNegative">
          Quantity must be greater than zero.
        </span>
        <span v-if="quantityNaN"> Quantity must be a number. </span>
      </template>
    </InputElement>
    <div class="pt-2 flex justify-end order-1">
      <ButtonAdd class="self-end" @click="emitAdd" />
    </div>
  </form>
</template>

<script setup>
import {
  ref,
  reactive,
  inject,
  defineEmit,
  useContext,
  computed,
  watchEffect,
} from 'vue'
import { useFind } from '@feathersjs/vuex'
import InputElement from '../Form/InputElement.vue'
import SearchSelect from '../Form/SearchSelect.vue'
import ButtonAdd from '../Button/ButtonAdd.vue'

import useProduct from '../../compositions/services/useProduct'
import useSpace from '../../compositions/services/useSpace'
import useGroup from '../../compositions/services/useGroup'
import useQuantity from '../../compositions/useQuantity'

const { searchLoaded, searchProducts, updateProductSearch } = useProduct()
const { searchSpaces, updateSpaceSearch } = useSpace()
const { searchGroups, updateGroupSearch } = useGroup()
const {
  quantity,
  quantityValid,
  quantityZero,
  quantityNaN,
  quantityNegative,
} = useQuantity()

const filtredSpaces = computed(() => {
  if (selectedGroup.value._id == 0) return searchSpaces.value
  return searchSpaces.value.filter(
    ({ group }) => group._id === selectedGroup.value._id
  )
})

const { emit } = useContext()
const start = ref(true)

const selectedProduct = ref({ _id: 0 })
const selectedGroup = ref({ _id: 0 })
const selectedSpace = ref({ _id: 0 })
const purchaseDate = ref(new Date())
const untilDate = ref(new Date())

watchEffect(() => {
  if (!selectedSpace.value._id === 0) return
  if (!selectedSpace.value.group) return
  if (
    selectedGroup.value._id !== 0 &&
    selectedGroup.value._id === selectedSpace.value.group._id
  )
    return
  selectedGroup.value = selectedSpace.value.group
})

watchEffect(() => {
  if (selectedProduct.value._id === 0) return
  if (!selectedProduct.value.defaultQuantity) return
  quantity.value = selectedProduct.value.defaultQuantity
})

function emitAdd() {
  if (start.value) {
    start.value = false
  }
  if (!quantityValid.value) return
  if (selectedProduct.value._id === 0) return
  if (selectedSpace.value._id === 0) return
  emit('add', {
    product: selectedProduct.value._id,
    space: selectedSpace.value._id,
    quantity: quantity.value,
    purchaseDate: purchaseDate.value,
    untilDate: untilDate.value,
  })
}
</script>
