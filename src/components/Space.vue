<template>
  <pre>{{ space }}</pre>
</template>

<script>
export default {
  props: {
    space: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style></style>
