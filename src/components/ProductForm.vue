<template>
  <form @submit="emitAdd" class="space-y-2 max-w-xs mt-4">
    <InputElement name="Name" v-model="name">
      <template v-slot:error v-if="!nameValid">
        Name must not be empty.
      </template>
    </InputElement>
    <InputElement name="Default Quantity" type="text" v-model="quantity">
      <template v-slot:error v-if="!quantityValid">
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
import InputElement from './InputElement.vue'
import SelectElement from './SelectElement.vue'
import ButtonAdd from './ButtonAdd.vue'

const units = [
  { id: 1, name: 'UNIT' },
  { id: 2, name: 'GRAM' },
  { id: 3, name: 'LITER' },
]

defineEmit(['add'])

const start = ref(true)

const { emit } = useContext()
const name = ref('')
const quantity = ref('1')
const unit = reactive({ id: 1, name: 'UNIT' })
const nameEmpty = computed(() => !name.value.length)
const nameValid = computed(() => start.value || !nameEmpty.value)
const quantityZero = computed(() => quantity.value == 0)
const quantityNegative = computed(() => quantity.value < 0)
const quantityNaN = computed(() => Number(quantity.value).toString() === 'NaN')
const quantityValid = computed(
  () =>
    start.value ||
    (!quantityZero.value && !quantityNegative.value && !quantityNaN.value)
)
const unitValid = computed(
  () => !!units.find(({ id, name }) => id === unit.id && name === unit.name)
)

function setUnit(value) {
  unit.name = value.name
  unit.id = value.id
}

function emitAdd() {
  start.value = false
  if (!nameValid.value) return
  if (!quantityValid.value) return
  if (!unitValid.value) return
  console.log(unit, unit.value)
  emit('add', {
    name: name.value,
    defaultQuantity: Number(quantity.value),
    unit: unit.name,
  })
}
</script>
