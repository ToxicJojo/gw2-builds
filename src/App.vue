<template lang='pug'>
  div.app
    Skill(id='5516')
    Skill(id='44612')
    Skill(id='5534')
    select(v-model='currentProfession')
      option(v-for='profession in professions' :value='profession')  {{ profession }}

    BuildEditor(:professionId='currentProfession')

</template>

<script>
import BuildEditor from '@/components/BuildEditor.vue'
import Skill from '@/components/Skill.vue'
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
    Skill,
  },
}
</script>

<style lang='scss'>

* {
  box-sizing: border-box;
}

</style>
