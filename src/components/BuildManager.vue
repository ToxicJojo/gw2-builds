<template lang='pug'>
  .build-manager

    .build-list
      ul
        li(v-for='(build, index) in builds' @click='openBuild(index, build)') {{ build.name }}
      .new-build
        button(@click='showNewBuildProfessions = true' v-if='!showNewBuildProfessions') Create New Build
        template(v-else)
          button(v-for='profession in professions' @click='newBuild(profession)') {{ profession }}
    .build-editor
      span Profession: {{ currentBuild.profession }}
      span Name:
        input(type='text' v-model='currentBuild.name')
      button(@click='saveBuild') Save Build
      BuildEditor(:professionId='currentBuild.profession' v-model='currentBuild')
</template>

<script>
import BuildEditor from '@/components/BuildEditor.vue'
import professions from '@/data/professions.json'

const emptyBuild = () => {
  return {
    profession: 'Guardian',
    name: 'Build Name',
    build: {
      skills: {
        healSkill: 0,
        utilityOne: 0,
        utilityTwo: 0,
        utilityThree: 0,
        eliteSkill: 0,
      },
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
}

export default {
  name: 'BuildManager',
  data () {
    return {
      showNewBuildProfessions: false,
      currentProfession: 'Elementalist',
      professions,
      currentBuild: emptyBuild(),
      currentBuildIndex: -1,
    }
  },
  computed: {
    builds () {
      return this.$store.state.builds.buildList
    },
  },
  methods: {
    newBuild (profession) {
      const newBuild = emptyBuild()
      newBuild.profession = profession
      this.$store.commit('builds/addBuild', newBuild)
      this.showNewBuildProfessions = false
    },
    openBuild (index, build) {
      this.currentBuild = JSON.parse(JSON.stringify(build))
      this.currentBuildIndex = index
    },
    saveBuild () {
      this.$store.commit('builds/updateBuild', {
        index: this.currentBuildIndex,
        build: this.currentBuild,
      })
    },
  },
  components: {
    BuildEditor,
  },
}
</script>

<style lang='scss' scoped>

.build-manager {
  display: flex;
  flex-direction: row;
}

.build-list {
  width: 25%;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    padding: 16px;
    background-color: #333;
    color: white;
    text-align: center;
    cursor: pointer;

    &:hover {
      background-color: #666;
    }
  }
}

.new-build {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #333;
  border: none;
  width: 100%;
  padding: 16px;
  text-align: center;
  color: white;
  font-size: inherit;
}

</style>
