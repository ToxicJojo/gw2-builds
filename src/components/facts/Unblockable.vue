<template lang='pug'>
  .unblockable
    span {{ fact.text }}
</template>

<script>
export default {
  name: 'Unblockable',
  props: ['fact'],
}
</script>

<style lang='scss' scoped>

</style>
