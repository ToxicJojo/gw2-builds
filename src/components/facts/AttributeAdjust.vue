<template lang='pug'>
  .attribute-adjust
    span {{ fact.text ? fact.text: fact.target }}: {{ fact.value }}
</template>

<script>
export default {
  name: 'AttributeAdjust',
  props: ['fact'],
}
</script>
