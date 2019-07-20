<template>
  <div class="home">
    <h1>This is an home page</h1>
    <div>
      <span>{{count}}</span>
      <button @click="add">add</button>
      <button @click="$store.commit('reduce',5)">reduce</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  computed: mapState(['count']),
  methods: {
    add() {
      this.$store.dispatch('add',100)
    }
  }
}
</script>
