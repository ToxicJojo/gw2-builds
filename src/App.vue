<template lang='pug'>
  div.app
    Trait(:id='214')
    Trait(:id='700')
    Trait(:id='706')
    Trait(:id='710')
    Trait(:id='2168')
</template>

<script>
import Trait from '@/components/Trait.vue'

export default {
  name: 'App',
  async mounted () {
    this.$store.dispatch('loadSpecializations', [1])
  },
  components: {
    Trait,
  },
}
</script>

<style lang='scss'>

</style>
