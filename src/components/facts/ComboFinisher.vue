<template lang='pug'>
  .combo-finisher
    span {{fact.text }}: {{ fact.finisher_type }}
</template>

<script>
export default {
  name: 'Combo Finisher',
  props: ['fact'],
}
</script>

<style lang='scss' scoped>

</style>
