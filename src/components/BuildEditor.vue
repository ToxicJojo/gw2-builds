<template lang='pug'>
  .build-editor
    template(v-if='isLoadingProfession')
      span Loading {{ professionId }}
    template(v-else)
      h2 Editor: {{ profession.name }}
      .skill-row
        SkillEditor(v-model='value.build.skills.healSkill' skillType='heal' :skillOptions='availableHealSkills')
        SkillEditor(v-model='value.build.skills.utilityOne' skillType='heal' :skillOptions='availableUtilitySkills')
        SkillEditor(v-model='value.build.skills.utilityTwo' skillType='heal' :skillOptions='availableUtilitySkills')
        SkillEditor(v-model='value.build.skills.utilityThree' skillType='heal' :skillOptions='availableUtilitySkills')
        SkillEditor(v-model='value.build.skills.eliteSkill' skillType='heal' :skillOptions='availableEliteSkills')
      SpecializationEditor(v-model='value.build.specializationOne' :specializationOptions='availableNonEliteSpecializations')
      SpecializationEditor(v-model='value.build.specializationTwo' :specializationOptions='availableNonEliteSpecializations')
      SpecializationEditor(v-model='value.build.specializationThree' :specializationOptions='availableSpecializations')
</template>

<script>
import SpecializationEditor from '@/components/SpecializationEditor.vue'
import SkillEditor from '@/components/SkillEditor.vue'

export default {
  name: 'BuildEditor',
  data () {
    return {
      isLoadingProfession: false,
    }
  },
  beforeMount () {
    this.loadProfession()
  },
  methods: {
    async loadProfession () {
      this.isLoadingProfession = true
      await this.$store.dispatch('loadProfessions', [this.professionId])
      await this.$store.dispatch('loadSpecializations', this.profession.specializations)
      // TODO refactor this
      await this.$store.dispatch('loadSkills', this.profession.skills.filter((skill) => skill.type === 'Utility' || skill.type === 'Heal' || skill.type === 'Elite').map((skill) => skill.id))
      this.isLoadingProfession = false
    },
  },
  computed: {
    profession () {
      return this.$store.state.professions[this.professionId]
    },
    build () {
      return this.value.build
    },
    availableSkills () {
      return this.profession.skills.filter((skill) => skill.type === 'Utility' || skill.type === 'Heal' || skill.type === 'Elite').map((skill) => skill.id)
    },
    availableHealSkills () {
      return this.profession.skills.filter((skill) => skill.type === 'Heal').map((skill) => skill.id)
    },
    availableUtilitySkills () {
      return this.profession.skills.filter((skill) => skill.type === 'Utility').map((skill) => skill.id)
    },
    availableEliteSkills () {
      return this.profession.skills.filter((skill) => skill.type === 'Elite').map((skill) => skill.id)
    },
    availableNonEliteSpecializations () {
      return this.availableSpecializations.filter((specialization) => {
        return this.$store.state.specializations[specialization].elite === false
      })
    },
    availableSpecializations () {
      return this.profession.specializations.filter((specialization) => {
        return (this.build.specializationOne.id !== specialization) &&
               (this.build.specializationTwo.id !== specialization) &&
               (this.build.specializationThree.id !== specialization)
      })
    },
  },
  watch: {
    professionId () {
      this.loadProfession()
    },
  },
  props: ['professionId', 'value'],
  components: {
    SpecializationEditor,
    SkillEditor,
  },
}
</script>

<style lang='scss' scoped>

.build-editor {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.skill-row {
  display: flex;
}

</style>
