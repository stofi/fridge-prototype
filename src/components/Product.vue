<template>
  <pre>{{ product }}</pre>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style></style>
