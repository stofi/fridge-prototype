<template>
  <form autocomplete="off" @submit="emitAdd" class="space-y-2 max-w-xs mt-4 px-4">
    <InputElement name="Name" v-model="name">
      <template v-slot:error v-if="!start && !nameValid ">
        Name must not be empty.
      </template>
    </InputElement>
    <InputElement name="Default Quantity" type="text" v-model="quantity">
      <template v-slot:error v-if="!start && !quantityValid">
        <span v-if="quantityZero || quantityNegative">
          Quantity must be greater than zero.
        </span>
        <span v-if="quantityNaN"> Quantity must be a number. </span>
      </template>
    </InputElement>
    <SelectElement
      name="Unit"
      :items="units"
      :modelValue="unit"
      @update:modelValue="setUnit"
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
import SelectElement from '../Form/SelectElement.vue'
import ButtonAdd from '../Button/ButtonAdd.vue'
import useUnit from '../../compositions/useUnit'
import useQuantity from '../../compositions/useQuantity'
import useName from '../../compositions/useName'

defineEmit(['add'])
const { emit } = useContext()

const start = ref(true)

const { unit, unitValid, units } = useUnit()
const {
  quantity,
  quantityValid,
  quantityZero,
  quantityNaN,
  quantityNegative,
} = useQuantity()
const { name, nameEmpty, nameValid } = useName()

function emitAdd() {
  if (start.value) {
    start.value = false
  }
  if (!nameValid.value) return
  if (!quantityValid.value) return
  if (!unitValid.value) return
  emit('add', {
    name: name.value,
    defaultQuantity: Number(quantity.value),
    unit: unit.name,
  })
}
</script>
