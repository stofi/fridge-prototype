<template>
  <pre>{{ group }}</pre>
</template>

<script>
export default {
  props: {
    group: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style></style>
