<template lang='pug'>
  div.app
    BuildManager

</template>

<script>
import BuildEditor from '@/components/BuildEditor.vue'
import BuildManager from '@/components/BuildManager.vue'
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
    BuildManager,
    Skill,
  },
}
</script>

<style lang='scss'>

* {
  box-sizing: border-box;
}

</style>
