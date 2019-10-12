<template lang='pug'>
  .specialization
    template(v-if='specialization')
      .specialization-bg(:style='{ backgroundImage: "url(" + specialization.background + ")" }')
      .specialization-column
        Trait(:id='specialization.minor_traits[0]' selected='true')
      .specialization-column
        Trait(v-for='traitId in tierOneTraits' :id='traitId' :selected='selectedTraits.tierOne === traitId' @click.native='selectTrait(traitId, 1)')
      .specialization-column
        Trait(:id='specialization.minor_traits[1]' selected='true')
      .specialization-column
        Trait(v-for='traitId in tierTwoTraits' :id='traitId' :selected='selectedTraits.tierTwo === traitId' @click.native='selectTrait(traitId, 2)')
      .specialization-column
        Trait(:id='specialization.minor_traits[2]' selected='true')
      .specialization-column
        Trait(v-for='traitId in tierThreeTraits' :id='traitId' :selected='selectedTraits.tierThree === traitId' @click.native='selectTrait(traitId, 3)')

</template>

<script>
import Trait from '@/components/Trait.vue'

export default {
  name: 'Specialization',
  data () {
    return {
      selectedTraits: {
        tierOne: 0,
        tierTwo: 0,
        tierThree: 0,
      },
    }
  },
  mounted () {
    this.$store.dispatch('loadSpecializations', [this.id])
  },
  computed: {
    specialization () {
      return this.$store.state.specializations[this.id]
    },
    // These might need to be read  from the traits 'tier' attribute if the traits are not always orderd correctly.
    tierOneTraits () {
      return this.specialization.major_traits.slice(0, 3)
    },
    tierTwoTraits () {
      return this.specialization.major_traits.slice(3, 6)
    },
    tierThreeTraits () {
      return this.specialization.major_traits.slice(6, 9)
    },
  },
  methods: {
    selectTrait (id, tier) {
      if (tier === 1) {
        this.selectedTraits.tierOne = id
      } else if (tier === 2) {
        this.selectedTraits.tierTwo = id
      } else if (tier === 3) {
        this.selectedTraits.tierThree = id
      }
    },
  },
  components: {
    Trait,
  },
  props: ['id'],
}
</script>

<style lang='scss' scoped>

.specialization {
  display: flex;
  padding: 24px;
  width: 650px;
  height: 140px;
  position: relative;
  padding-left: 150px;
  background-color: #111;
}

.specialization-bg {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: .5;
  background-position: bottom left;
}

.specialization-column {
  display: flex;
  flex-direction:  column;
  padding: 16px;
  justify-content: center;
}

</style>
