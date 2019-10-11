<template lang='pug'>
  .radius
    span {{ fact.text }}: {{ fact.distance }}
</template>

<script>
export default {
  name: 'Radius',
  props: ['fact'],
}
</script>

<style lang='scss' scoped>

</style>
