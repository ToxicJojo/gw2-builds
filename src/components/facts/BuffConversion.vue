<template lang='pug'>
  .buff-conversion
    span Gain {{ fact.target }} based on a Percentage of {{ fact.source }}: {{ fact.percent }}%
</template>

<script>
export default {
  name: 'Buff Conversion',
  props: ['fact'],
}
</script>

<style lang='scss' scoped>

</style>
