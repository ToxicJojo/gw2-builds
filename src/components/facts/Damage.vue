<template lang='pug'>
  .damage
    span Damage: {{ fact.hit_count }}
</template>

<script>
export default {
  name: 'Attribute Adjust',
  props: ['fact'],
}
</script>

<style lang='scss' scoped>

</style>
