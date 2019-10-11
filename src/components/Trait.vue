<template lang='pug'>
  .trait
    template(v-if='trait')
      img(:src='trait.icon' @mouseout='showTooltip = false' @mouseenter='showTooltip = true')
      ToolTip(v-if='showTooltip' :value='trait' :isFloating='true')
</template>

<script>
import ToolTip from '@/components/Tooltip.vue'

export default {
  name: 'Trait',
  data () {
    return {
      showTooltip: false,
    }
  },
  async beforeMount () {
    await this.$store.dispatch('loadTraits', [this.id])
  },
  methods: {
  },
  computed: {
    trait () {
      return this.$store.state.traits[this.id]
    },
  },
  props: ['id'],
  components: {
    ToolTip,
  },
}
</script>

<style lang='scss' scoped>

.trait {
  position: relative;
  width: 64px;
  height: 64px;
}

img {
  opacity: .5;
  padding-right: 6px;
  padding-bottom: 6px;
  width: 100%;
  height: auto;

  &:hover {
    opacity: 1;
 }
}

</style>
