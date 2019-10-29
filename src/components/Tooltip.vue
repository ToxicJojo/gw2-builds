<template lang='pug'>
  .tooltip(:class='{ floating: isFloating }')
    .tooltip-skill(v-if='skill')
      .tooltip-title-row
        span.tooltip-title {{ skill.name }}
        .tooltip-recharge(v-if='skillCoolDown')
          span {{ skillCoolDown.value }}
          img(:src='skillCoolDown.icon')
      .tooltip-facts(v-if='skill.facts')
        Fact(v-for='fact in skillFacts' :fact='fact')
    .tooltip-trait
      .tooltip-title-row
        span.tooltip-title {{ value.name }}
        .tooltip-recharge(v-if='coolDownFact')
          span {{ coolDownFact.value }}
          img(:src='coolDownFact.icon')
      p {{ value.description }}
      .tooltip-facts(v-if='value.facts')
        Fact(v-for='fact in nonCooldownFacts' :fact='fact')

</template>

<script>
import Fact from '@/components/Fact.vue'

export default {
  name: 'Tooltip',
  computed: {
    coolDownFact () {
      if (!this.value.facts) return false
      return this.value.facts.find((fact) => {
        return fact.type === 'Recharge'
      })
    },
    nonCooldownFacts () {
      return this.value.facts.filter((fact) => {
        return fact.type !== 'Recharge'
      })
    },
    skill () {
      if (!this.value.skills) return false
      return this.value.skills[0]
    },
    skillFacts () {
      return this.skill.facts.filter((fact) => {
        return fact.type !== 'Recharge'
      })
    },
    skillCoolDown () {
      return this.skill.facts.find((fact) => {
        return fact.type === 'Recharge'
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
  color: rgba(255, 255, 255, .6);

  &.floating {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 100%;
    width: 500px;
  }
}

.tooltip-skill, .tooltip-trait {
  background-color: rgba(0, 0, 0, .8);
  padding: 8px;
  margin: 4px;
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
