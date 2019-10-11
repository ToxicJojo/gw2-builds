<template lang='pug'>
  .buff
    span  {{ fact.status }} ({{ fact.duration }}s): {{ fact.description }}
</template>

<script>
export default {
  name: 'Buff',
  props: ['fact'],
}
</script>

<style lang='scss' scoped>

</style>
