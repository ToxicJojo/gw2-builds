<template lang='pug'>
  .skill
    template(v-if='skill')
      img(:src='skill.icon' @mouseout='showTooltip = false' @mouseenter='showTooltip = true')
      Tooltip(v-if='showTooltip' :value='skill' :isFloating='true')
</template>

<script>
import Tooltip from '@/components/Tooltip.vue'

export default {
  name: 'Skill',
  data () {
    return {
      showTooltip: false,
    }
  },
  computed: {
    skill () {
      return this.$store.state.skills[this.id]
    },
  },
  props: ['id'],
  components: {
    Tooltip,
  },
}
</script>

<style lang='scss' scoped>

.skill {
  position: relative;
  width: 64px;
  height: 64px;
}

img {
  width: 100%;
  height: auto;
}

</style>
