<template lang='pug'>
  .attribute-adjust
    span {{ fact.target }}: {{ fact.value}}
</template>

<script>
export default {
  name: 'AttributeAdjust',
  props: ['fact'],
}
</script>
