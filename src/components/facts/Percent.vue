<template lang='pug'>
  .percent
    span {{ fact.text }}: {{ fact.percent }}%
</template>

<script>
export default {
  name: 'Percent',
  props: ['fact'],
}
</script>

<style lang='scss' scoped>

</style>
