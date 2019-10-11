<template lang='pug'>
  .range
    span {{ fact.text }}: {{ fact.value }}
</template>

<script>
export default {
  name: 'Range',
  props: ['fact'],
}
</script>

<style lang='scss' scoped>

</style>
