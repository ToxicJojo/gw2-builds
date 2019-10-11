<template lang='pug'>
  .combo-field
    span {{ fact.text }}: {{ fact.distacne }}
</template>

<script>
export default {
  name: 'Distance',
  props: ['fact'],
}
</script>

<style lang='scss' scoped>

</style>
