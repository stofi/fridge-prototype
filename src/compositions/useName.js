import { ref, computed } from 'vue'

export default function () {
  const name = ref('')
  const nameEmpty = computed(() => !name.value.length)
  const nameValid = computed(() => !nameEmpty.value)

  return {
    name,
    nameEmpty,
    nameValid,
  }
}
