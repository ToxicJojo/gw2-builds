<template lang='pug'>
  .combo-field
    span {{ fact.text }}: {{ fact.field_type }}
</template>

<script>
export default {
  name: 'Combo Field',
  props: ['fact'],
}
</script>

<style lang='scss' scoped>

</style>
