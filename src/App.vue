<template lang='pug'>
  div.app
    Trait(:id='214')
    Specialization(:id='1')
    Specialization(:id='10')
    Specialization(:id='23')
</template>

<script>
import Trait from '@/components/Trait.vue'
import Specialization from '@/components/Specialization.vue'

export default {
  name: 'App',
  async mounted () {
    this.$store.dispatch('loadSpecializations', [1])
  },
  components: {
    Trait,
    Specialization,
  },
}
</script>

<style lang='scss'>

* {
  box-sizing: border-box;
}

</style>
