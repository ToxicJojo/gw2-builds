<template lang='pug'>
  .build-editor
    template(v-if='isLoadingProfession')
      span Loading {{ professionId }}
    template(v-else)
      h2 Editor: {{ profession.name }}
      SpecializationEditor(v-model='build.specializationOne' :specializationOptions='availableNonEliteSpecializations')
      SpecializationEditor(v-model='build.specializationTwo' :specializationOptions='availableNonEliteSpecializations')
      SpecializationEditor(v-model='build.specializationThree' :specializationOptions='availableSpecializations')
</template>

<script>
import SpecializationEditor from '@/components/SpecializationEditor.vue'

export default {
  name: 'BuildEditor',
  data () {
    return {
      isLoadingProfession: false,
      build: {
        specializationOne: {
          id: null,
          tierOne: 0,
          tierTwo: 0,
          tierThree: 0,
        },
        specializationTwo: {
          id: null,
          tierOne: 0,
          tierTwo: 0,
          tierThree: 0,
        },
        specializationThree: {
          id: null,
          tierOne: 0,
          tierTwo: 0,
          tierThree: 0,
        },
      },
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
      this.isLoadingProfession = false
    },
  },
  computed: {
    profession () {
      return this.$store.state.professions[this.professionId]
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
  props: ['professionId'],
  components: {
    SpecializationEditor,
  },
}
</script>

<style lang='scss' scoped>

</style>
