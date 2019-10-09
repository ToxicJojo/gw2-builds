<template lang='pug'>
  div.app
</template>

<script>
import api from '@/api'

export default {
  name: 'App',
  async mounted () {
    const trait = await api.getTraits(214, 'de')
    console.log(trait)
  },
}
</script>

<style lang='scss'>

</style>
