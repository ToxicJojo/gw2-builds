<template lang='pug'>
  .skill-editor
    .skill-select(@click='showSelect = !showSelect')
      | +
      template(v-if='showSelect')
        .skill-select-window
          Skill(v-for='skill in skillOptions' :id='skill' @click.native='selectSkill(skill)')
    Skill(:id='value')
</template>

<script>
import Skill from '@/components/Skill.vue'

export default {
  name: 'SkillEditor',
  data () {
    return {
      showSelect: false,
    }
  },
  methods: {
    selectSkill (skill) {
      this.$emit('input', skill)
    },
  },
  props: ['value', 'skillType', 'skillOptions'],
  components: {
    Skill,
  },
}
</script>

<style lang='scss' scoped>

.skill-editor {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 64px;
}

.skill-select {
  background-color: #333;
  color: white;
  display: flex;
  justify-content: center;
}

.skill-select-window {
  z-index: 2;
  background-color: #333;
  position: absolute;
  top: 100%;
  display: flex;
  flex-wrap: wrap;
  width: 289px;
  padding: 16px;
}

</style>
