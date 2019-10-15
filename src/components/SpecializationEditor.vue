<template lang='pug'>
  .specialization-editor
    .specialization-select(@click='showSelect = !showSelect')
      | >
      template(v-if='showSelect')
        .specialization-select-window
          div(v-for='specialization in specializations' @click='selectSpecialization(specialization.id)')
              img(:src='specialization.icon')

    template(v-if='value.id')
      Specialization.specialization(:id='value.id' :value='value' @input='updateValue')
</template>

<script>
import Specialization from '@/components/Specialization.vue'

export default {
  name: 'SpecializationEditor',
  data () {
    return {
      showSelect: false,
    }
  },
  props: ['value', 'specializationOptions'],
  computed: {
    specializations () {
      return this.specializationOptions.map((id) => {
        return this.$store.state.specializations[id]
      })
    },
  },
  methods: {
    updateValue (newValue) {
      this.$emit('input', newValue)
    },
    selectSpecialization (id) {
      this.value.id = id
      this.$emit('input', this.value)
    },
  },
  components: {
    Specialization,
  },
}
</script>

<style lang='scss' scoped>

.specialization {
  //position: absolute;
}

.specialization-editor {
  display: flex;
  flex-direction: row;
}
.specialization-select {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  background-color: rgba(0, 0, 0, .8);
  width: 30px;
  height: 140px;

  color: white;
  font-size: 30px;
}

.specialization-select-window {
  z-index: 1;
  position: absolute;
  padding: 8px;
  left: 100%;
  //top: -15px;
  background-color: rgba(0, 0, 0, .8);
  display: flex;
  flex-wrap: wrap;
  width: 180px;

  img {
    width: 48px;
    height: 48px;
  }

}

</style>
