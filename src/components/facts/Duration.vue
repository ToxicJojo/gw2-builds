<template lang='pug'>
  .duration
    span {{ fact.text }}: {{ fact.duration }}
</template>

<script>
export default {
  name: 'Duration',
  props: ['fact'],
}
</script>
