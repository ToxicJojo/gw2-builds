<template lang='pug'>
  div.app
    select(v-model='currentProfession')
      option(v-for='profession in professions' :value='profession')  {{ profession }}

    BuildEditor(:professionId='currentProfession')

</template>

<script>
import BuildEditor from '@/components/BuildEditor.vue'
import professions from '@/data/professions.json'

export default {
  name: 'App',
  data () {
    return {
      professions,
      currentProfession: 'Elementalist',
    }
  },
  components: {
    BuildEditor,
  },
}
</script>

<style lang='scss'>

* {
  box-sizing: border-box;
}

</style>
