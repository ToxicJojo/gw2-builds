<template lang='pug'>
  .number
    span {{ fact.text }}: {{ fact.value }}
</template>

<script>
export default {
  name: 'Number',
  props: ['fact'],
}
</script>

<style lang='scss' scoped>

</style>
