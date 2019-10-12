<template lang='pug'>
  .tooltip(:class='{ floating: isFloating }')
    .tooltip-title-row
      span.tooltip-title {{ value.name }}
      .tooltip-recharge(v-if='coolDownFact')
        span {{ coolDownFact.value }}
        img(:src='coolDownFact.icon')
    p {{ value.description }}
    .tooltip-facts
      Fact(v-for='fact in nonCooldownFacts' :fact='fact')

</template>

<script>
import Fact from '@/components/Fact.vue'

export default {
  name: 'Tooltip',
  computed: {
    coolDownFact () {
      return this.value.facts.find((fact) => {
        return fact.type === 'Recharge'
      })
    },
    nonCooldownFacts () {
      return this.value.facts.filter((fact) => {
        return fact.type !== 'Recharge'
      })
    },
  },
  props: ['value', 'isFloating'],
  components: {
    Fact,
  },
}
</script>

<style lang='scss' scoped>

.tooltip {
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, .8);
  color: rgba(255, 255, 255, .6);
  padding: 8px;

  &.floating {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 100%;
    width: 500px;
  }
}

img {
  width: 32px;
  height: 32px;
}

.tooltip-recharge {
  display: flex;
  align-items: center;
}

.tooltip-title-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

</style>
