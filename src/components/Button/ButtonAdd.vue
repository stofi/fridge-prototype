<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <button
    type="button"
    class="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-brand hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand dark:ring-offset-black"
  >
    <PlusIconSolid class="h-5 w-5" aria-hidden="true" />
  </button>
</template>

<script>
import { PlusIcon as PlusIconSolid } from '@heroicons/vue/solid'
import { PlusIcon as PlusIconOutline } from '@heroicons/vue/outline'

export default {
  components: {
    PlusIconOutline,
    PlusIconSolid,
  },
}
</script>
