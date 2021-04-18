import { ref, computed } from 'vue'

export default function () {
  const quantity = ref('1')
  const quantityZero = computed(() => quantity.value == 0)
  const quantityNegative = computed(() => quantity.value < 0)
  const quantityNaN = computed(
    () => Number(quantity.value).toString() === 'NaN'
  )
  const quantityValid = computed(
    () => !quantityZero.value && !quantityNegative.value && !quantityNaN.value
  )
  return {
    quantity,
    quantityZero,
    quantityNegative,
    quantityNaN,
    quantityValid,
  }
}
