<template lang='pug'>
  .trait
    template(v-if='trait')
      img(:src='trait.icon' @mouseout='showTooltip = false' @mouseenter='showTooltip = true' :class='{ selected: selected}')
      ToolTip(v-if='showTooltip' :value='trait' :isFloating='true')
    template(v-else)
      .trait-empty
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
  computed: {
    trait () {
      return this.$store.state.traits[this.id]
    },
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    selected: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    ToolTip,
  },
}
</script>

<style lang='scss' scoped>

.trait {
  // This needs to be relative so the tooltip is positioned correctly.
  position: relative;
  display: flex;
  margin: 4px;
  border: 1px black;
}

.trait-empty {
  background: #333;
  width: 32px;
  height: 32px;
}

img {
  width: 32px;
  height: 32px;
  opacity: .65;

  &:hover, &.selected {
    opacity: 1;
 }
}
</style>
