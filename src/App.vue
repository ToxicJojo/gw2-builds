<template lang='pug'>
  div.app
</template>

<script>
import api from '@/api'

export default {
  name: 'App',
  async mounted () {
    const traits = await api.getTraits(214, 'de')
    console.log(traits)

    await this.$store.dispatch("loadTraits", [214])
    await this.$store.dispatch("loadTraits", [214, 700, 705])
  },
}
</script>

<style lang='scss'>

</style>
