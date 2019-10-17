<template lang='pug'>
  div.app
    BuildManager

</template>

<script>
import BuildManager from '@/components/BuildManager.vue'
import localStorageHelper from '@/util/local-storage-helper'

export default {
  name: 'App',
  data () {
    return {
    }
  },
  beforeMount () {
    const builds = localStorageHelper.getObject('builds')
    this.$store.commit('builds/setBuilds', builds)
  },
  components: {
    BuildManager,
  },
}
</script>

<style lang='scss'>

* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

</style>
