<template lang='pug'>
  .time
    span {{ fact.text }}: {{ fact.duration }}s
</template>

<script>
export default {
  name: 'Time',
  props: ['fact'],
}
</script>

<style lang='scss' scoped>

</style>
