<template lang='pug'>
  .no-data
    span  {{ fact.text }}
</template>

<script>
export default {
  name: 'NoData',
  props: ['fact'],
}
</script>

<style lang='scss' scoped>

</style>
