<template lang='pug'>
  .specialization
    template(v-if='!isLoadingSpecialization')
      .specialization-bg(:style='{ backgroundImage: "url(" + specialization.background + ")" }')
      .specialization-column
        Trait(:id='specialization.minor_traits[0]' :selected='true')
      .specialization-column
        Trait(v-for='traitId in tierOneTraits' :id='traitId' :selected='value.tierOne === traitId' @click.native='selectTrait(traitId, 1)')
      .specialization-column
        Trait(:id='specialization.minor_traits[1]' :selected='true')
      .specialization-column
        Trait(v-for='traitId in tierTwoTraits' :id='traitId' :selected='value.tierTwo === traitId' @click.native='selectTrait(traitId, 2)')
      .specialization-column
        Trait(:id='specialization.minor_traits[2]' :selected='true')
      .specialization-column
        Trait(v-for='traitId in tierThreeTraits' :id='traitId' :selected='value.tierThree === traitId' @click.native='selectTrait(traitId, 3)')

</template>

<script>
import Trait from '@/components/Trait.vue'

export default {
  name: 'Specialization',
  data () {
    return {
      isLoadingSpecialization: false,
    }
  },
  created () {
    this.loadSpecialization()
  },
  computed: {
    specialization () {
      return this.$store.state.specializations[this.id]
    },
    specializationTraits () {
      return this.specialization.major_traits.map((trait) => {
        return this.$store.state.traits[trait]
      })
    },
    tierOneTraits () {
      return this.specializationTraits.filter((trait) => {
        return trait.tier === 1
      }).map((trait) => trait.id)
    },
    tierTwoTraits () {
      return this.specializationTraits.filter((trait) => {
        return trait.tier === 2
      }).map((trait) => trait.id)
    },
    tierThreeTraits () {
      return this.specializationTraits.filter((trait) => {
        return trait.tier === 3
      }).map((trait) => trait.id)
    },
  },
  methods: {
    selectTrait (id, tier) {
      let newValue = JSON.parse(JSON.stringify(this.value))

      if (tier === 1) {
        newValue.tierOne = id
      } else if (tier === 2) {
        newValue.tierTwo = id
      } else if (tier === 3) {
        newValue.tierThree = id
      }

      this.$emit('input', newValue)
    },
    async loadSpecialization () {
      this.isLoadingSpecialization = true
      await this.$store.dispatch('loadSpecializations', [this.id])
      await this.$store.dispatch('loadTraits', [...this.specialization.major_traits, ...this.specialization.minor_traits])
      this.isLoadingSpecialization = false
    },
  },
  watch: {
    id () {
      this.loadSpecialization()
    },
  },
  components: {
    Trait,
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    value: Object,
  },
}
</script>

<style lang='scss' scoped>

.specialization {
  display: flex;
  position: relative;
  width: 650px;
  height: 140px;
  padding-left: 180px;
  background-color: #000;
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
