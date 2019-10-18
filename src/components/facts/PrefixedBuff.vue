<template lang='pug'>
  .prefixed-buff
    img(:src='fact.prefix.icon')
    span {{ fact.prefix.status }}
</template>

<script>
export default {
  name: 'PrefixedBuff',
  props: ['fact'],
}
</script>

<style lang="scss" scoped>

.prefixed-buff {
  display: flex;
  align-items: center;
}

img {
  width: 32px;
  height: 32px;
  margin: 4px;
}

</style>
