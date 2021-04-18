import { reactive, computed } from 'vue'

export default function () {
  const units = [
    { id: 1, name: 'UNIT' },
    { id: 2, name: 'GRAM' },
    { id: 3, name: 'LITER' },
  ]

  const unit = reactive({ id: 1, name: 'UNIT' })
  const unitValid = computed(
    () => !!units.find(({ id, name }) => id === unit.id && name === unit.name)
  )
  function setUnit(value) {
    unit.name = value.name
    unit.id = value.id
  }
  return {
    units,
    unit,
    unitValid,
    setUnit,
  }
}
