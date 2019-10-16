<template lang='pug'>
  .build-manager

    .build-list
      button New Build
    .build-editor
      select(v-model='currentProfession')
        option(v-for='profession in professions' :value='profession')  {{ profession }}
      BuildEditor(:professionId='currentProfession')
</template>

<script>
import BuildEditor from '@/components/BuildEditor.vue'
import professions from '@/data/professions.json'

export default {
  name: 'BuildManager',
  data () {
    return {
      currentProfession: 'Elementalist',
      professions,
    }
  },
  components: {
    BuildEditor,
  },
}
</script>

<style lang='scss' scoped>

.build-manager {
  display: flex;
  flex-direction: row;
}

</style>
